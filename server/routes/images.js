const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const staticPathes = require('../config/paths');
const { auth } = require('../middleware/auth');

const router = express.Router();
const { imagesPath } = staticPathes;

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, imagesPath);
  },
  async filename(req, file, cb) {
    const { originalname } = file;
    const ts = String(Date.now()).substr(-5);
    const videoExt = path.extname(originalname);
    const fileName = path.basename(originalname, videoExt);
    const videoName = `${fileName}-${ts}${videoExt}`;
    cb(null, videoName);
  },
});
const upload = multer({ storage });

router.get('/', auth, async (req, res) => {
  if (req.isAuth) {
    const videoFiles = fs.readdirSync(imagesPath);
    const filesArr = [];
    videoFiles.forEach((file) => {
      filesArr.push({
        name: file,
        url: `/images/${file}`,
      });
    });
    return res.json(filesArr);
  }
  return res.status(401).json({
    isAuth: false,
  });
});

router.post('/', auth, upload.single('image'), async (req, res) => {
  if (req.isAuth) {
    const images = req.file;
    console.log('images', images);
    try {
      const imgFile = fs.readFileSync(images.path);
      const fileName = images.filename.split('.')[0];
      await sharp(imgFile)
        .resize(360, 220)
        .toFormat('jpeg')
        .toFile(`${imagesPath}/thumbs/thumb-${fileName}.jpg`, (err, info) => {
          console.log(err, info);
        });
    } catch (err) {
      console.error('133323', err);
    }

    images.url = `/static/images/${images.filename}`;

    if (images.length === 0) res.json({ success: false, message: 'No Video' });
    return res.json({ success: true, images });
  }
  return res.status(401).json({
    isAuth: false,
  });
});

router.delete('/', auth, async (req, res) => {
  if (req.isAuth) {
    const { filename } = req.body;
    if (!filename || filename === '') res.json({ success: false, message: 'No filename' });
    try {
      fs.unlinkSync(path.join(imagesPath, filename));
      fs.unlinkSync(path.join(`${imagesPath}/thumbs`, `thumb-${filename.replace('png', 'jpg')}`));
      return res.json({ success: true });
    } catch (e) {
      return res.json({ success: false, message: e });
    }
  } else {
    return res.status(401).json({
      isAuth: false,
    });
  }
});

module.exports = router;
