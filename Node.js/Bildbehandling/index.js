const jimp = require('jimp');

jimp.read('image.jpeg', (err, lenna) => {
	if (err) throw err;
	lenna.resize(300, 200).quality(60).write('image-modified.jpeg');
});
