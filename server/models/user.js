const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config').get(process.env.NODE_ENV);

const SALT_I = 10;

const userSchema = mongoose.Schema({
  login: {
    type: String,
    required: true,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: Number,
    required: true,
    default: 0,
  },
  token: {
    type: String,
  },
});

userSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(SALT_I, (err, salt) => {
      if (err) return next(err);
      return bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error);
        user.password = hash;
        return next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePass = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    return cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  const user = this;
  const token = jwt.sign(user._id.toHexString(), config.SECRET);

  user.token = token;
  user.save((err, userr) => {
    if (err) return cb(err);
    return cb(null, userr);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  const user = this;

  jwt.verify(token, config.SECRET, (err, decode) => {
    user.findOne({ _id: decode, token }, (errr, userr) => {
      if (errr) return cb(errr);
      return cb(null, userr);
    });
  });
};

userSchema.methods.deleteToken = function (token, cb) {
  const user = this;
  user.updateOne({
    $unset: { token: 1 },
  }, (err, userr) => {
    if (err) return cb(err);
    return cb(null, userr);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
