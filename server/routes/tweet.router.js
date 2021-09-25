const express = require('express');
const {
   getTweets,
   getUserTweets,
   getTweet,
   handlePostTweet,
   handleToggleLike,
   handleToggleBookMark,
} = require('../controllers/tweet.controller');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');
const router = express.Router();

router.get('/tweets', handleAuthVerify, getTweets);
router.get('/tweets/user', handleAuthVerify, getUserTweets);
router.post('/tweet', handleAuthVerify, handlePostTweet);
router.get('/tweet/:id', handleAuthVerify, getTweet);
router.get('/tweet/:id/togglelike', handleAuthVerify, handleToggleLike);
router.get('/tweet/:id/togglebookmark', handleAuthVerify, handleToggleBookMark);

module.exports = router;
