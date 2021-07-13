import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_ENDPOINT } from '../../common/utils/utils';

export const handleFetchTweets = createAsyncThunk(
   'tweet/handleFetchTweets',
   async ({ token }) => {
      const response = await axios({
         method: 'GET',
         url: `${API_ENDPOINT}/api/tweets`,
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
      [handleFetchTweets.pending]: (state, action) => {
         state.tweetsStatus = 'loading';
      },
      [handleFetchTweets.fulfilled]: (state, action) => {
         state.tweets = action.payload.tweets;
         state.tweetsStatus = 'success';
      },
   },
});

export default tweetSlice.reducer;
