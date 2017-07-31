'use strict';

// utility funcion


function a() {

    console.log(this);
}
a.prototype.name = function () {
    console.log('anymous');
};
let b = new a();
b.name;

console.log(__dirname)