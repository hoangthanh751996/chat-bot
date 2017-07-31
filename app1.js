'use stict';
let greet = require('./greet');
let config = require('./config');

function logGreetMe(fn) {
	fn();
}
console.log(greet);
//config();
console.log(config);
//greet.greet();
//greet.meet();

