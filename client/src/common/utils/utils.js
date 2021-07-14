import { handleFetchUser } from '../../features/user/userSlice';

export const API_ENDPOINT = 'https://driftchirp-backend.duhbhavesh.repl.co';

export const setLocalStorage = async (user, token) => {
   await localStorage?.setItem(
      'session',
      JSON.stringify({ token, username: user.username, id: user.id }),
   );
};

export const isValidPassword = (password) => {
   const passwordRegex = new RegExp('[0-9]+');
   return password.length > 6 && passwordRegex.test(password);
};

export const setTheme = () => {
   if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
         window.matchMedia('(prefers-color-scheme: dark)').matches)
   ) {
      document.documentElement.classList.add('dark');
   } else {
      document.documentElement.classList.remove('dark');
   }
};

export const setUser = async (dispatch, setToken) => {
   const session = JSON.parse(localStorage?.getItem('session'));
   session?.token &&
      session?.username &&
      (await dispatch(
         handleFetchUser({
            username: session.username,
            token: session.token,
         }),
      ));
   session?.token && (await dispatch(setToken({ token: session.token })));
};

export const formatDate = (ISOString) => {
   const date = new Date(ISOString).toUTCString().substring(4, 16);
   return date;
};

export const checkFollow = (arr, userId) => {
   return arr.find((userFollowed) => userFollowed.id === userId) ? true : false;
};

export const checkLikes = (arr, tweetId) => {
   return arr.find((userLikedTweet) => userLikedTweet.id === tweetId)
      ? true
      : false;
};
