const { User } = require('../models/user.model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const handleAuthVerify = async (req, res, next) => {
   const token = req.headers.authorization;
   try {
      const { userId } = jwt.verify(token, SECRET);
      const user = await User.findById(userId).select('-password');
      req.user = user;
      console.log(user);
      next();
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'You do not have permission to view this content',
         errorMessage: error.message,
      });
   }
};

module.exports = { handleAuthVerify };
