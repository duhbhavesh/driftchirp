import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_ENDPOINT } from '../../common/utils/utils';

export const handleFetchFeed = createAsyncThunk(
   'tweet/handleFetchFeed',
   async ({ token }) => {
      const response = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/feed`,
         headers: {
            Authorization: token,
         },
      });
      return response.data;
   },
);

const initialState = {
   tweets: null,
   tweetsStatus: 'idle',
   tweetsError: '',
};

const tweetSlice = createSlice({
   name: 'tweet',
   initialState,
   reducers: {},
   extraReducers: {
      [handleFetchFeed.pending]: (state, action) => {
         state.tweetsStatus = 'loading';
      },
      [handleFetchFeed.fulfilled]: (state, action) => {
         console.log('action feed', action.payload.tweets);
         state.tweets = action.payload.tweets;
         state.tweetsStatus = 'success';
      },
   },
});

export default tweetSlice.reducer;
