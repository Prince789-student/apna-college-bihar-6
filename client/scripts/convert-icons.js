const Jimp = require('jimp');

async function convertImage() {
  try {
    const image = await Jimp.read('public/logo.jpg');
    await image.resize(512, 512)
               .writeAsync('public/logo-512.png');
    
    await image.resize(192, 192)
               .writeAsync('public/logo-192.png');
    console.log('Images converted to proper PNG sizes!');
  } catch (err) {
    console.error('Error converting images:', err);
  }
}

convertImage();
