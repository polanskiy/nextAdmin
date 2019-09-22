const { User } = require('./../models/user');


const auth = (req, res, next) => {
  const token = req.cookies.auth;
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) {
      req.isAuth = false;
      // return res.status(401).json({
      //   error: true,
      // });
    } else {
      req.isAuth = true;
    }

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
