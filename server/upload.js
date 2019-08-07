const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const staticPathes = require('./config/paths');

const router = express.Router();
const { imagesPath } = staticPathes;

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, imagesPath);
  },
  filename(req, file, cb) {
    const { originalname } = file;
    const ts = String(Date.now()).substr(-5);
    const videoExt = path.extname(originalname);
    const fileName = path.basename(originalname, videoExt);
    const videoName = `${fileName}-${ts}${videoExt}`;
    cb(null, videoName);
  },
});
const upload = multer({ storage });

router.get('/', async (req, res, next) => {
  console.log('videoFiles');

  const videoFiles = fs.readdirSync(imagesPath);
  const filesArr = [];
  videoFiles.forEach((file) => {
    filesArr.push({
      name: file,
      url: `/images/${file}`,
    });
  });
  res.json(filesArr);
});

router.post('/', upload.single('image'), async (err, req, res, next) => {
  console.log('images', req.files);
  const images = req.files;
  if (images.length === 0) res.json({ success: false, message: 'No Video' });
  res.json({ success: true });
});

router.delete('/', async (req, res, next) => {
  const { filename } = req.body;
  if (!filename || filename === '') res.json({ success: false, message: 'No filename' });
  try {
    fs.unlinkSync(path.join(imagesPath, filename));
    res.json({ success: true });
  } catch (e) {
    res.json({ success: false, message: e });
  }
});

module.exports = router;
