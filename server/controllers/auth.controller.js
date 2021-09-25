const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET;
const { User } = require('../models/user.model');

const handleUserSignUp = async (req, res) => {
   const { email, username } = req.body;
   try {
      const user = await User.findOne({ email: email });
      if (user) {
         throw new Error('User Already exists with this e-mail');
      }

      const userName = await User.findOne({ username: username });
      if (userName) {
         throw new Error('Username Already exists, try another username');
      }

      const newUser = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);
      await newUser.save();

      res.status(201).json({
         success: true,
         message: 'User signed Up!',
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         message: 'Something went wrong!',
         errorMessage: error.message,
      });
   }
};

const handleUserSignIn = async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({ email });

      if (!user) {
         throw new Error('User does not exist, Signup to enter');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
         throw new Error('E-mail and password does not match');
      }

      const token = jwt.sign({ userId: user._id }, SECRET, {
         expiresIn: '24h',
      });

      res.json({
         success: true,
         message: 'User Logged In',
         token,
         user,
      });
   } catch (error) {
      res.status(401).json({
         success: false,
         errorMessage: error.message,
      });
   }
};

module.exports = { handleUserSignUp, handleUserSignIn };
