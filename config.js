'use strict';
function config() {
	console.log('This is Config');
}
let config2= function () {
	console.log('This is Config 2');
}
let config3 = 'This is config 3';

exports.config2 = config2;
exports.config = config;
exports.config3 = config3;
exports = 123;
