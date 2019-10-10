const path = require('path');
const fs = require('fs');

const publicPath = path.resolve('static');

const imagesPath = path.join(publicPath, 'images');
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
