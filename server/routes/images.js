const express = require('express');
const multer = require('multer');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const staticPathes = require('../config/paths');
const { auth } = require('../middleware/auth');

const router = express.Router();
const { imagesPath, iconsPath } = staticPathes;
const acceptExt = '.jpg .png .jpeg .svg';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dir = req.params.type || '';
    const imgPath = `${imagesPath}/${dir}`;
    fse.mkdirsSync(imgPath);
    cb(null, imgPath);
  },
  async filename(req, file, cb) {
    const { originalname } = file;
    const ts = String(Date.now()).substr(-5);
    const videoExt = path.extname(originalname);
    if (acceptExt.indexOf(videoExt) >= 0) {
      const fileName = path.basename(originalname.replace(/\s/g, '_').trim(), videoExt);
      const videoName = `${fileName}-${ts}${videoExt}`;
      cb(null, videoName);
    } else {
      return false;
    }
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

router.get('/useIcons', auth, async (req, res) => {
  if (req.isAuth) {
    const videoFiles = fs.readdirSync(iconsPath);
    const filesArr = [];
    videoFiles.forEach((file) => {
      filesArr.push({
        name: file,
        url: `/static/images/useIcons/${file}`,
        time: fs.statSync(`${iconsPath}/${file}`).mtime.getTime(),
      });
    });
    const sorted = filesArr.sort((a, b) => a.time - b.time);
    return res.json(sorted);
  }
  return res.status(401).json({
    isAuth: false,
  });
});

router.post('/:type', auth, upload.single('image'), async (req, res) => {
  if (req.isAuth) {
    const images = req.file;
    const dir = req.params.type;
    const isThumb = req.query.thumb;
    try {
      const imgFile = fs.readFileSync(images.path);
      if (isThumb !== 'false') {
        const fileName = images.filename.split('.')[0];
        await sharp(imgFile)
          .resize(360, 420)
          .toFormat('jpeg')
          .toFile(`${imagesPath}/${dir}/thumb-${fileName}.jpg`, (err, info) => {
            // console.log(err, info);
          });
      }
    } catch (err) {
      console.error('133323', err);
    }

    images.url = `/static/images/${dir}/${images.filename}`;

    if (images.length === 0) res.json({ success: false, message: 'No image' });
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

router.delete('/:type', auth, async (req, res) => {
  if (req.isAuth) {
    const { filename } = req.body;
    const dir = req.params.type || '';
    if (!filename || filename === '') res.json({ success: false, message: 'No filename' });
    try {
      fs.unlinkSync(path.join(`${imagesPath}/${dir}`, filename));
      fs.unlinkSync(path.join(`${imagesPath}/${dir}`, `thumb-${filename.replace('png', 'jpg')}`));
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
