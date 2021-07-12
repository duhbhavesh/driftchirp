import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLocalStorage } from '../../common/utils/utils';
import { API_ENDPOINT } from '../../common/utils/utils';

export const handleUserSignIn = createAsyncThunk(
   'user/handleUserSignIn',
   async ({ email, password }, { rejectWithValue }) => {
      try {
         const response = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/signin`,
            data: {
               email,
               password,
            },
         });
         console.log('here', response);
         return response.data;
      } catch (error) {
         console.log({ error });
         const value = error.response.data.errorMessage;
         return rejectWithValue(value);
      }
   },
);

export const handleUserSignUp = createAsyncThunk(
   'user/handleUserSignUp',
   async (user, { rejectWithValue }) => {
      try {
         const response = await axios({
            method: 'POST',
            url: `${API_ENDPOINT}/api/signup`,
            data: user,
         });
         return response.data;
      } catch (error) {
         console.log({ error });
         const value = error.response.data.errorMessage;
         return rejectWithValue(value);
      }
   },
);

export const handleUserSignOut = createAction('user/handleUserSignOut');

export const handleFetchUser = createAsyncThunk(
   'user/handleFetchUser',
   async ({ username, token }) => {
      const response = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/user/${username}`,
         headers: {
            Authorization: token,
         },
      });
      console.log(username, 'working');
      return response.data;
   },
);

const initialState = {
   currentUser: null,
   token: null,
   signUp: {
      signUpStatus: 'idle',
      signUpError: '',
   },
   signIn: {
      signInStatus: 'idle',
      signInError: '',
   },
};

const userSlice = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      setToken(state, { payload }) {
         state.token = payload.token;
      },
      resetToken(state) {
         state.token = null;
      },
   },
   extraReducers: {
      [handleUserSignIn.pending]: (state, action) => {
         state.signIn.signInStatus = 'loading';
      },
      [handleUserSignIn.fulfilled]: (state, action) => {
         state.currentUser = action.payload.user;
         state.token = action.payload.token;
         state.signIn.signInError = '';
         setLocalStorage(action.payload.user, action.payload.token);
         state.signIn.signInStatus = 'signInSuccess';
      },
      [handleUserSignIn.rejected]: (state, action) => {
         state.signIn.signInError = action.payload;
         state.signIn.signInStatus = 'error';
      },

      [handleUserSignUp.pending]: (state, action) => {
         state.signUp.signUpStatus = 'loading';
      },
      [handleUserSignUp.fulfilled]: (state, action) => {
         state.signUp.signUpStatus = 'signUpSuccess';
      },
      [handleUserSignUp.rejected]: (state, action) => {
         state.signUp.signUpError = action.payload;
         state.signUp.signUpError = 'error';
      },

      [handleUserSignOut]: (state) => {
         state.currentUser = null;
         state.token = null;
         state.signUp = {
            signUpStatus: 'idle',
            signUpError: '',
         };
         state.signIn = {
            signInStatus: 'idle',
            signInError: '',
         };
         localStorage?.removeItem('session');
      },

      [handleFetchUser.pending]: (state, action) => {
         state.status = 'loading';
      },
      [handleFetchUser.fulfilled]: (state, action) => {
         state.currentUser = action.payload.user;
         state.status = 'success';
      },
      [handleFetchUser.rejected]: (state, action) => {
         state.error = action.payload;
         state.status = 'error';
      },
   },
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
