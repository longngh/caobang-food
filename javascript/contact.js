                                                            // Your name
var getName = document.getElementById("your-name");
var checkName = document.getElementById("checkName");

getName.addEventListener("keyup", function() {
    validateName();
});

function validateName( ){
    if (getName.value.trim().length == 0) {
        checkName.innerHTML = "Vui lòng điền tên của bạn.";
    }  else if (getName.value.trim().length > 100 ){
        checkName.innerHTML = "Tên của bạn không vượt quá 100 ký tự.";
    }  else{
        checkName.innerHTML = "";
    }
}
                                                            // Your email
var getEmail = document.getElementById("your-email");
var checkEmail = document.getElementById("checkEmail");

getEmail.addEventListener("keyup", function() {
    validateEmail();
});

function validateEmail( ){
    if (getEmail.value.trim().length == 0) {
        checkEmail.innerHTML = "Vui lòng điền email của bạn.";
    }  else if (getEmail.value.trim().length > 100 ){
        checkEmail.innerHTML = "Email của bạn không vượt quá 100 ký tự.";
    }  else{
        checkEmail.innerHTML = "";
    }
}
                                                            // Subject
var getSubject = document.getElementById("subject");
var checkSubject = document.getElementById("checkSubject");

getSubject.addEventListener("keyup", function() {
    validateSubject();
});

function validateSubject( ){
    if (getSubject.value.trim().length == 0) {
        checkSubject.innerHTML = "Vui lòng điền chủ đề.";
    }  else if (getSubject.value.trim().length < 50 ){
        checkSubject.innerHTML = "Chủ đề không được ngắn hơn 50 ký tự.";
    }  else if (getSubject.value.trim().length > 250 ){
        checkSubject.innerHTML = "Chủ đề không vượt quá 250 ký tự.";
    }  else{
        checkSubject.innerHTML = "";
    }
}
                                                            // Message 2
var getMessage = document.getElementById("message2");
var checkMessage = document.getElementById("checkMessage2");

getMessage.addEventListener("keyup", function() {
    validateMessage();
});

function validateMessage( ){
    if (getMessage.value.trim().length == 0) {
        checkMessage.innerHTML = "Vui lòng nhập tin nhắn.";
    }  else if (getMessage.value.trim().length > 500 ){
        checkMessage.innerHTML = "Dòng tin nhắn không vượt quá 500 ký tự.";
    }  else{
        checkMessage.innerHTML = "";
    }
}
                                                            // Submit
var getSubmit = document.getElementById("submit");

getSubmit.addEventListener("click", function() {
    validateName();
    validateEmail();
    validateSubject();
    validateMessage();
});
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  });