'use strict';
const fs = require('fs');
const got = require('got');
const ora = require('ora');
const ytclear = require('ytclear');
const currentDir = process.cwd();

const convertToMp3 = (urlMp3, urlMp3Title) => {
	let titleMp3 = ytclear(urlMp3Title);
	let spinner = ora(`Creating file: ${titleMp3}.mp3`).start();

	got.stream(urlMp3)
	.pipe(fs.createWriteStream(`${currentDir}/${titleMp3}.mp3`))
	.on('finish', ()=> {
		spinner.succeed();
	});
}

module.exports = convertToMp3;
