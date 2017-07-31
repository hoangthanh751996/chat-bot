'use strict';
let valueConfig = 'Hello Node Js';
function meet() {
	console.log('Meeting with Thanh');
}
let greet = function () {
	console.log('Hello Thanh!');
}
exports.greet = greet;
//exports = 'Hello';
module.exports.valueConfig = valueConfig;
