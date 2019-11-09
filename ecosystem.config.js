module.exports = {
  apps: [{
    name: 'Travel',
    script: './server/server.js',
    env: {
      NO_PROXY: '*',
      NODE_ENV: 'production',
      DB_ACC: 'admin:dasyatravel89'
    },
    env_production: {
      NO_PROXY: '*',
      NODE_ENV: 'production',
      DB_ACC: 'admin:dasyatravel89'
    },
  }],
};
