// ==UserScript==
//
// @name            OBS Auto Login
// @namespace       http://ogr.kocaeli.edu.tr/KOUBS
// @description     Auto Login
//
// @match           http://ogr.kocaeli.edu.tr/*
//
// ==/UserScript==
// ---------------------------------------------------------------------------

var numberText = '1402020--',
    passText = 'your_pass',
    pass = document.getElementById("Sifre"), 
    number = document.getElementById("OgrNo"),
    login = document.getElementById("Ara");


window.setInterval(new function() {
    pass.value = passText;
    number.value = numberText;
    login.click();
}, 500);