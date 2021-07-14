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

export const handleToggleLike = createAsyncThunk(
   'tweet/handleToggleLike',
   async ({ id, token }, { rejectWithValue }) => {
      try {
         const response = await axios({
            method: 'GET',
            url: `${API_ENDPOINT}/api/tweet/${id}/togglelike`,
            headers: {
               Authorization: token,
            },
         });
         console.log('toggling like', response);
         return response.data;
      } catch (error) {
         console.log({ error });
         const value = error.response.data.errorMessage;
         return rejectWithValue(value);
      }
   },
);

export const handleToggleBookMark = createAsyncThunk(
   'user/handleToggleBookmark',
   async ({ id, token }, { rejectWithValue }) => {
      try {
         const response = await axios({
            method: 'GET',
            url: `${API_ENDPOINT}/api/tweet/${id}/togglebookmark`,
            headers: {
               Authorization: token,
            },
         });
         console.log('toggling bookmark', response);
         return response.data;
      } catch (error) {
         console.log({ error });
         const value = error.response.data.errorMessage;
         return rejectWithValue(value);
      }
   },
);

const initialState = {
   tweets: null,
   tweetsStatus: 'idle',
   tweetsError: '',

   tweetPost: {},
   tweetPostStatus: 'idle',

   tweetsLiked: {},
   tweetLikedStatus: 'idle',
   tweetLikedError: '',

   tweetsBookmarked: {},
   tweetBookmarkStatus: 'idle',
   tweetBookmarkError: '',
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

      [handleToggleLike.pending]: (state, action) => {
         state.tweetLikedStatus = 'loading';
      },
      [handleToggleLike.fulfilled]: (state, action) => {
         state.tweetsLiked = action.payload.likes;
         state.tweetLikedStatus = 'success';
      },
      [handleToggleLike.rejected]: (state, action) => {
         state.tweetLikedError = action.payload;
         state.tweetLikedStatus = 'error';
      },

      [handleToggleBookMark.pending]: (state, action) => {
         state.tweetBookmarkStatus = 'loading';
      },
      [handleToggleBookMark.fulfilled]: (state, action) => {
         state.tweetsBookmarked = action.payload.bookmarks;
         state.tweetBookmarkStatus = 'success';
      },
      [handleToggleBookMark.rejected]: (state, action) => {
         state.tweetBookmarkError = action.payload;
         state.tweetBookmarkStatus = 'error';
      },
   },
});

export default tweetSlice.reducer;
