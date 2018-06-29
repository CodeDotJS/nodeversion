'use strict';

const got = require('got');

module.exports = () => {
	const url = 'https://nodejs.org/dist/latest/SHASUMS256.txt';

	return got(url).then(res => {
		const ver = res.body.split('-v')[1].split('-')[0];
		return {
			version: ver
		};
	});
};
