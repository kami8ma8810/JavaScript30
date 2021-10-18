"use strict";
window.addEventListener('keydown', function (e) {
    console.log(e.code);
    var audio = document.querySelector("audio[data-key=\"" + e.code + "\"]");
    console.log(audio);
});
