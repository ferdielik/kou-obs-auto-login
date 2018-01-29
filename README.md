
replace number and pass in autologin.user.js

then..
More Tools > Extenstions > Drag & Drop js file


Errors: This extension may have been corrupted.
Install extension: https://chrome.google.com/webstore/detail/javascript-injector/ejnccfcackblkelbafbolcpjfpcmbplg/related?hl=en

and paste below script after:

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
