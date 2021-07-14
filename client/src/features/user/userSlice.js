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
      return response.data;
   },
);

export const handleFetchUsers = createAsyncThunk(
   'user/handleFetchUsers',
   async ({ token }) => {
      const response = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/users`,
         headers: {
            Authorization: token,
         },
      });
      return response.data;
   },
);

export const handleFetchUserProfile = createAsyncThunk(
   'user/handleFetchUserProfile',
   async ({ username, token }) => {
      const response = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/user/${username}`,
         headers: {
            Authorization: token,
         },
      });
      return response.data;
   },
);

export const handleFollow = createAsyncThunk(
   'user/handleFollow',
   async ({ id, token }) => {
      const response = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/user/${id}/follow`,
         headers: {
            Authorization: token,
         },
      });
      return response.data;
   },
);

export const handleUnFollow = createAsyncThunk(
   'user/handleUnFollow',
   async ({ id, token }) => {
      const response = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/user/${id}/unfollow`,
         headers: {
            Authorization: token,
         },
      });
      return response.data;
   },
);

const initialState = {
   token: null,

   currentUser: null,
   currentUserStatus: 'idle',

   signUpStatus: 'idle',
   signUpError: '',

   signInStatus: 'idle',
   signInError: '',

   users: [],
   usersStatus: 'idle',

   userProfile: null,
   userProfileStatus: 'idle',

   userFollowStatus: 'idle',
   userUnfollowStatus: 'idle',
};

const userSlice = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      setToken(state, { payload }) {
         state.token = payload.token;
      },
   },
   extraReducers: {
      [handleUserSignIn.pending]: (state, action) => {
         state.signInStatus = 'loading';
      },
      [handleUserSignIn.fulfilled]: (state, action) => {
         state.currentUser = action.payload.user;
         state.token = action.payload.token;
         state.signInError = '';
         setLocalStorage(action.payload.user, action.payload.token);
         state.signInStatus = 'signInSuccess';
      },
      [handleUserSignIn.rejected]: (state, action) => {
         state.signInError = action.payload;
         state.signInStatus = 'error';
      },

      [handleUserSignUp.pending]: (state, action) => {
         state.signUpStatus = 'loading';
      },
      [handleUserSignUp.fulfilled]: (state, action) => {
         state.signUpStatus = 'signUpSuccess';
      },
      [handleUserSignUp.rejected]: (state, action) => {
         state.signUpError = action.payload;
         state.signUpStatus = 'error';
      },

      [handleUserSignOut]: (state) => {
         state.currentUser = null;
         state.currentUserStatus = 'idle';
         state.token = null;
         state.signUpStatus = 'idle';
         state.signUpError = '';
         state.signInStatus = 'idle';
         state.signInError = '';
         state.users = [];
         state.usersStatus = 'idle';
         state.userProfile = null;
         state.userProfileStatus = 'idle';
         state.userFollowStatus = 'idle';
         state.userUnfollowStatus = 'idle';
         localStorage?.removeItem('session');
      },

      [handleFetchUser.pending]: (state, action) => {
         state.currentUserStatus = 'loading';
      },
      [handleFetchUser.fulfilled]: (state, action) => {
         state.currentUser = action.payload.user;
         state.currentUserStatus = 'success';
      },
      [handleFetchUser.rejected]: (state, action) => {
         state.currentUserStatus = 'error';
      },

      [handleFetchUsers.pending]: (state, action) => {
         state.usersStatus = 'loading';
      },
      [handleFetchUsers.fulfilled]: (state, action) => {
         state.users = action.payload.users;
         state.usersStatus = 'success';
      },
      [handleFetchUsers.rejected]: (state, action) => {
         state.usersStatus = 'error';
      },

      [handleFetchUserProfile.pending]: (state, action) => {
         state.userProfileStatus = 'loading';
      },
      [handleFetchUserProfile.fulfilled]: (state, action) => {
         state.userProfile = action.payload.user;
         state.userProfileStatus = 'success';
      },
      [handleFetchUserProfile.rejected]: (state, action) => {
         state.userProfileStatus = 'error';
      },

      [handleFollow.pending]: (state, action) => {
         state.userFollowStatus = 'loading';
      },
      [handleFollow.fulfilled]: (state, action) => {
         state.userProfile = action.payload.users;
         state.userFollowStatus = 'success';
      },

      [handleUnFollow.pending]: (state, action) => {
         state.userUnfollowStatus = 'loading';
      },
      [handleUnFollow.fulfilled]: (state, action) => {
         state.userProfile = action.payload.users;
         state.userUnfollowStatus = 'success';
      },
   },
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
