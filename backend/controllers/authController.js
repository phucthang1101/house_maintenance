const User = require('../models/user');
const { errorHandler } = require('../helper/errHandler');
const jwt = require('jsonwebtoken'); //to generate signed token
const expressJwt = require('express-jwt'); // authorization check

exports.signup = (req, res) => {
  // console.log(req.body);
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: 'Email is taken',
      });
    }
  });
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err),
      });
    }
    res.json({
      user,
    });
  });
};

exports.signin = (req, res) => {
  //find user base on email
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({
        err: 'User with that email is not exist. Please try again.',
      });
    }
    // if user is found, make sure the email and password match
    // create authenticate method in User Schema
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and password do not match',
      });
    }
    //generate a signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    //persist the token as 'token' in cookie with expiry date
    res.cookie('token', token, { expire: new Date() + 9999 });

    // return response with user and token to frontend client
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, name, email, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Signout' });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});

exports.authMiddleware = (req, res, next) => {
 
  const authUserId = req.user._id;
  User.findById({ _id: authUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    req.profile = user;
    next();
  });
};

exports.adminMiddleware = (req, res, next) => {
 // console.log(req)
  const adminUserId = req.user._id;
  User.findById({ _id: adminUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    if (user.role !== 1) {
      return res.status(400).json({
        error: 'Admin resource. Access denied',
      });
    }
    req.profile = user;
    next();
  });
};

