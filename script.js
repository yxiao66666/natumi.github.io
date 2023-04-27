// Javasctipt for all the html files

// Landing page only

$(document).ready(function(){
    $("#qr-code").hover(function(){document.getElementById("qr-popup").classList.toggle("show");}, 
    function(){document.getElementById("qr-popup").classList.toggle("show");});
});

// W3schools. (2023). jQuery hover() Method. 
// Retrieved from W3schools: https://www.w3schools.com/jquery/event_hover.asp

// About page only

$(document).ready(function(){
    $("#one").hover(function(){document.getElementById("myPopup1").classList.toggle("show");}, 
    function(){document.getElementById("myPopup1").classList.toggle("show");});
});

$(document).ready(function(){
    $("#two").hover(function(){document.getElementById("myPopup2").classList.toggle("show");}, 
    function(){document.getElementById("myPopup2").classList.toggle("show");});
});

$(document).ready(function(){
    $("#three").hover(function(){document.getElementById("myPopup3").classList.toggle("show");}, 
    function(){document.getElementById("myPopup3").classList.toggle("show");});
});

$(document).ready(function(){
    $("#four").hover(function(){document.getElementById("myPopup4").classList.toggle("show");}, 
    function(){document.getElementById("myPopup4").classList.toggle("show");});
});

$(document).ready(function(){
    $("#five").hover(function(){document.getElementById("myPopup5").classList.toggle("show");}, 
    function(){document.getElementById("myPopup5").classList.toggle("show");});
});

$(document).ready(function(){
    $("#six").hover(function(){document.getElementById("myPopup6").classList.toggle("show");}, 
    function(){document.getElementById("myPopup6").classList.toggle("show");});
});

$(document).ready(function(){
    $("#seven").hover(function(){document.getElementById("myPopup7").classList.toggle("show");}, 
    function(){document.getElementById("myPopup7").classList.toggle("show");});
});

$(document).ready(function(){
    $("#eight").hover(function(){document.getElementById("myPopup8").classList.toggle("show");}, 
    function(){document.getElementById("myPopup8").classList.toggle("show");});
});

$(document).ready(function(){
    $("#nine").hover(function(){document.getElementById("myPopup9").classList.toggle("show");}, 
    function(){document.getElementById("myPopup9").classList.toggle("show");});
});

// W3schools. (2023). jQuery hover() Method. 
// Retrieved from W3schools: https://www.w3schools.com/jquery/event_hover.asp

// contact page only

function contactButtonFunction() {
    contactValidateFname();
    contactValidateLname();
    contactValidatePhone();
    contactValidateEmail();
    contactValidateMessages();
    
    if (contactValidateFnameKey 
        + contactValidateLnameKey 
        + contactValidatePhoneKey 
        + contactValidateEmailKey 
        + contactValidateMessagesKey == 5) {	// only unlock when all boxes are correctly filled
            window.location.href="confirmation.html"
    }
}

var contactValidateFnameKey = 0;
var contactValidateLnameKey = 0;
var contactValidatePhoneKey = 0;
var contactValidateEmailKey = 0;
var contactValidateMessagesKey = 0;

function contactValidateFname() {
    var error = document.getElementById("firstname-error");
    
    if (document.getElementById("firstname-id").value == 0) {
        error.textContent = "Please enter a valid first name"// Changing content and color of content
        error.style.color = "red"
        contactValidateFnameKey = 0;
    } else {
        error.textContent = ""
        contactValidateFnameKey = 1;
    }
}

function contactValidateLname() {
    var error = document.getElementById("lastname-error");
    
    if (document.getElementById("lastname-id").value == 0) {
        error.textContent = "Please enter a valid last name"// Changing content and color of content
        error.style.color = "red"
        contactValidateLnameKey = 0;
    } else {
        error.textContent = ""
        contactValidateLnameKey = 1;
    }
}

function contactValidatePhone() {
    var error = document.getElementById("phone-error");
    
    if (document.getElementById("phone-id").value == 0 || isNaN(document.getElementById("phone-id").value) || document.getElementById("phone-id").value.length != 10) {
        error.textContent = "Please enter a valid phone number"// Changing content and color of content
        error.style.color = "red"
        contactValidatePhoneKey = 0;
    } else {
        error.textContent = ""
        contactValidatePhoneKey = 1;
    }
}

function contactValidateEmail() {
    var error = document.getElementById("email-error");
    var mailformat = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    if (document.getElementById("email-id").value == 0 || !document.getElementById("email-id").value.match(mailformat)) {
        error.textContent = "Please enter a valid email address"// Changing content and color of content
        error.style.color = "red"
        contactValidateEmailKey = 0;
    } else {
        error.textContent = ""
        contactValidateEmailKey = 1;
    }
}

// W3resource. (2022, 08 19). JavaScript: HTML Form - email validation. 
// Retrieved from W3resource: https://www.w3resource.com/javascript/form/email-validation.php


function contactValidateMessages() {
    var error = document.getElementById("messages-error");

    if (document.getElementById("messages-id").value == 0) {
        error.textContent = "Please enter a valid messages"// Changing content and color of content
        error.style.color = "red"
        contactValidateMessagesKey = 0;
    } else {
        error.textContent = ""
        contactValidateMessagesKey = 1;
    }
}

// Bookings page only

function bookingButtonFunction() {
    bookingValidateFname();
    bookingValidateLname();
    bookingValidatePhone();
    bookingValidateEmail();
    bookingValidateMessages1();
    bookingValidateDate();
    bookingValidateTime();
    bookingValidateMessages2();
    
    if (bookingValidateFnameKey 
        + bookingValidateLnameKey 
        + bookingValidatePhoneKey 
        + bookingValidateEmailKey 
        + bookingValidateMessagesKey1
        + bookingValidateDateKey
        + bookingValidateTimeKey
        + bookingValidateMessagesKey2 == 8) {   // only unlock when all boxes are correctly filled
            window.location.href="confirmation.html"
    }
}

var bookingValidateFnameKey = 0;
var bookingValidateLnameKey = 0;
var bookingValidatePhoneKey = 0;
var bookingValidateEmailKey = 0;
var bookingValidateMessagesKey1 = 0;
var bookingValidateDateKey = 0;
var bookingValidateTimeKey = 0;
var bookingValidateMessagesKey2 = 0;

function bookingValidateFname() {
    var error = document.getElementById("firstname-error");
    
    if (document.getElementById("firstname-id").value == 0) {
        error.textContent = "Please enter a valid first name"// Changing content and color of content
        error.style.color = "red"
        bookingValidateFnameKey = 0;
    } else {
        error.textContent = ""
        bookingValidateFnameKey = 1;
    }
}

function bookingValidateLname() {
    var error = document.getElementById("lastname-error");
    
    if (document.getElementById("lastname-id").value == 0) {
        error.textContent = "Please enter a valid last name"// Changing content and color of content
        error.style.color = "red"
        bookingValidateLnameKey = 0;
    } else {
        error.textContent = ""
        bookingValidateLnameKey = 1;
    }
}

function bookingValidatePhone() {
    var error = document.getElementById("phone-error");
    
    if (document.getElementById("phone-id").value == 0 || isNaN(document.getElementById("phone-id").value) || document.getElementById("phone-id").value.length != 10) {
        error.textContent = "Please enter a valid phone number"// Changing content and color of content
        error.style.color = "red"
        bookingValidatePhoneKey = 0;
    } else {
        error.textContent = ""
        bookingValidatePhoneKey = 1;
    }
}

function bookingValidateEmail() {
    var error = document.getElementById("email-error");
    var mailformat = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    if (document.getElementById("email-id").value == 0 || !document.getElementById("email-id").value.match(mailformat)) {
        error.textContent = "Please enter a valid email address"// Changing content and color of content
        error.style.color = "red"
        bookingValidateEmailKey = 0;
    } else {
        error.textContent = ""
        bookingValidateEmailKey = 1;
    }
}

// W3resource. (2022, 08 19). JavaScript: HTML Form - email validation. 
// Retrieved from W3resource: https://www.w3resource.com/javascript/form/email-validation.php

function bookingValidateMessages1() {
    var error = document.getElementById("messages1-error");

    if (document.getElementById("messages-id1").value == 0) {
        error.textContent = "Please enter a valid messages"// Changing content and color of content
        error.style.color = "red"
        bookingValidateMessagesKey1 = 0;
    } else {
        error.textContent = ""
        bookingValidateMessagesKey1 = 1;
    }
}

function bookingValidateDate() {
    let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])[\/](202[3-9])/;
    var error = document.getElementById("event-error");

    if (document.getElementById("event-id").value == 0) {
        error.textContent = "Please enter a valid date"// Changing content and color of content
        error.style.color = "red"
        bookingValidateDateKey = 0;
    } else if (document.getElementById("event-id").value.match(dateformat)) {   // Matching the date through regular expression      
        error.textContent = ""
        bookingValidateDateKey = 1;
    } else {
        error.textContent = "Please enter a valid date"// Changing content and color of content
        error.style.color = "red"
        bookingValidateDateKey = 0;
    }
}

function bookingValidateTime() {
    var error = document.getElementById("time-error");

    var startingTime = document.getElementById("start-time-id").value;

    var endingTime = document.getElementById("end-time-id").value;

    if (endingTime == startingTime) {
        error.textContent = "End Time Can't be Equal to Start Time"// Changing content and color of content
        error.style.color = "red"
        bookingValidateTimeKey = 0;
    } else if (endingTime - startingTime < 0.5) {
        error.textContent = "End Time Can't be Earlier Than Start Time"// Changing content and color of content
        error.style.color = "red"
        bookingValidateTimeKey = 0;
    } else if (endingTime - startingTime > 3) {
        error.textContent = "Maximum Booking Period is 3 Hours"// Changing content and color of content
        error.style.color = "red"
        validateTimeKey = 0;
    } else {
        error.textContent = ""
        bookingValidateTimeKey = 1;
    }
}

function bookingValidateMessages2() {
    var error = document.getElementById("messages2-error");

    if (document.getElementById("messages-id2").value == 0) {
        error.textContent = "Please enter a valid messages"// Changing content and color of content
        error.style.color = "red"
        bookingValidateMessagesKey2 = 0;
    } else {
        error.textContent = ""
        bookingValidateMessagesKey2 = 1;
    }
}






