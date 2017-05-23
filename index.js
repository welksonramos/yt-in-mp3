#!/usr/bin/env node
'use strict';

const meow = require('meow');
const getYoutubeUrl = require('./lib/get-youtube-url');

const cli = meow(`
	Usage
	$ yt-in-mp3 <url>

	Example
	$ yt-in-mp3 https://www.youtube.com/watch?v=QH2-TGUlwu4

	Options
	-h, --help        Output help menu
	-v, --version     Output version number
	`, {
		alias: {
			h: 'help',
			v: 'version'
		}
	});

if (cli.input.length === 0 ) {
	process.stderr.write('\nSpecify only a Youtube link for conversion!\n');
	process.exit(1);
}
getYoutubeUrl(cli.input[0], cli.flags);
