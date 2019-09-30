module.exports = {
  apps: [{
    name: 'Travel',
    script: './server/server.js',
    env: {
      NO_PROXY: '*',
      NODE_ENV: 'production',
    },
    env_production: {
      NO_PROXY: '*',
      NODE_ENV: 'production',
    },
  }],
};
