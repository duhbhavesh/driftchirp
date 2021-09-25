const express = require('express');
const {
   getUsers,
   getUser,
   handleFollow,
   handleUnFollow,
   getFeed,
} = require('../controllers/user.controller');
const {
   handleAuthVerify,
} = require('../middlewares/handleAuthVerify.middleware');
const router = express.Router();

router.get('/users', handleAuthVerify, getUsers);
router.get('/user/:username', handleAuthVerify, getUser);
router.get('/user/:id/follow', handleAuthVerify, handleFollow);
router.get('/user/:id/unfollow', handleAuthVerify, handleUnFollow);
router.get('/feed', handleAuthVerify, getFeed);

module.exports = router;
