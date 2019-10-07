const config = {
  production: {
    // SECRET: process.env.SECRET,
    SECRET: 'allahakbar777',
    DATABASE: process.env.MONGODB_URI,
  },
  default: {
    SECRET: 'SUPERSECRETPASSWORD123',
    DATABASE: 'mongodb://localhost:27017/site',
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
