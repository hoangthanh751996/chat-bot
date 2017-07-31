'use strict';
import Artyom from "artyom.js";
7`  +-`
// const artyom = require("artyom.js");
const artyom = new Artyom();

artyom.say("Good morning, i'm hungry. Do you want to eat something?", {
    onStart: function () {
        console.log("The text is being readed");
    },
    onEnd: function () {
        console.log("Well, that was all. Try with a longer text !");
    }
});