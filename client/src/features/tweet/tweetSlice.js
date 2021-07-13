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

export const handlePostTweet = createAsyncThunk(
   'tweet/handlePostTweet',
   async ({ tweet, token }) => {
      const response = await axios({
         method: 'POST',
         url: `${API_ENDPOINT}/api/tweet`,
         headers: {
            Authorization: token,
         },
         data: {
            tweet,
         },
      });
      console.log('posting tweet', response);
      return response.data;
   },
);

const initialState = {
   tweets: null,
   tweetsStatus: 'idle',
   tweetsError: '',

   tweetPost: {},
   tweetPostStatus: 'idle',
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
         state.tweets = action.payload.tweets;
         state.tweetsStatus = 'success';
      },

      [handlePostTweet.pending]: (state, action) => {
         state.tweetPostStatus = 'loading';
      },
      [handlePostTweet.fulfilled]: (state, action) => {
         state.tweetPost = action.payload.savedTweet;
         state.tweetPostStatus = 'success';
      },
   },
});

export default tweetSlice.reducer;
