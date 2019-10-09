const path = require('path');
const fs = require('fs');

const publicPath = path.resolve('public');

const imagesPath = path.join(publicPath, '/static/images');
const iconsPath = path.join(imagesPath, 'useIcons');


try {
  fs.mkdirSync(imagesPath, { recursive: true });
} catch (e) {
  console.log('error path');
}

module.exports = {
  imagesPath,
  iconsPath,
};
