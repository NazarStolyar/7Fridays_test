var lastname = document.querySelector('#name_text');
var email = document.getElementById('email');
var number = document.getElementById('number');
var massage = document.getElementById('massage');
var submit = document.getElementById('sabmit');

submit.addEventListener('click', function () {
    event.preventDefault();
    var status = false;
    if(/^([a-z\s]){3,15}$/.test(lastname.value)) {
        lastname.style.border = "none";
    } else {
        lastname.style.border = "2px solid red";
        status = false
    }
    if(/([0-9])/.test(number.value)) {
        number.style.border = "none";
    } else {
        number.style.border = "2px solid red";
        status = false
    }
    if (/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(email.value)) {
        email.style.border  = "none";
    } else {
        email.style.border  = "2px solid red";
        status = false;
    }
    if (/([A-Za-z0-9-]+)/.test(massage.value)) {
        massage.style.border  = "none";
    } else {
        massage.style.border  = "2px solid red";
        status = false;
    }
    if (!status) {
        return;
    }
});
