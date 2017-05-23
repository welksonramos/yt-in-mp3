'use strict';

const got = require('got');
const youtubeUrl = require('youtube-url');
const convertToMp3 = require('./convert-to-mp3.js');

const getYoutubeUrl = (url) => {

	if (youtubeUrl.valid(url) === true) {
		let api = 'http://www.youtubeinmp3.com/fetch/?format=JSON&video=';
		got(api+url, {json:true}).then(res => {
			convertToMp3(res.body.link, res.body.title);
		})
		.catch(err => console.error(err));
	}
	else {
		process.stderr.write('\nSpecify a valid Youtube link for conversion!\n');
			process.exit(1);
	}
}

module.exports = getYoutubeUrl;
