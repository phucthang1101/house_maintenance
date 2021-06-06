const User = require('../models/user');
const shortId = require('shortid');
const JWT = require('jsonwebtoken');
const expressJwt = require('express-jwt');


exports.signup = (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: 'Email is taken',
      });
    }

    const { name, email, password } = req.body;

    let username = shortId.generate();
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;

    let newUser = new User({ name, email, password, username, profile });
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      res.json({
        message: 'Signup success!',
      });
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  //check if User exits
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'That email does not exits.Please signup',
      });
    }
    //authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: 'Authentication fail !',
      });
    }
    //generate a JWT and send to clent
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('token', token, { expiresIn: '1d' });
    const { _id, username, name, email, role } = user;
    return res.json({
      token,
      user: { _id, username, name, email, role },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie('token');
  res.json({
    message: 'Signout !',
  });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET, algorithms: ['HS256'] 
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
