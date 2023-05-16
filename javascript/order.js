                                                    // Cake name
var getCake = document.getElementById("cake-name");
var checkCake = document.getElementById("checkCake");

getCake.addEventListener("change", function() {
    validateCake();
});
function validateCake(){
    if (getCake.value == "select-cake") {
        checkCake.innerHTML = "Vui lòng chọn sản phẩm.";
    }  else{
        checkCake.innerHTML = "";}
}
                                                    //Your name
var getName = document.getElementById("your-name");
var checkName = document.getElementById("checkName");

getName.addEventListener("keyup", function() {
    validateName2();
});

function validateName2( ){
    if (getName.value.trim().length == 0) {
        checkName.innerHTML = "Vui lòng điền tên của bạn.";
    }  else if (getName.value.trim().length > 100 ){
        checkName.innerHTML = "Tên của bạn không vượt quá 100 ký tự.";
    }  else{
        checkName.innerHTML = "";
    }
}
                                                    // Message
var getMessage = document.getElementById("message");
var checkMessage = document.getElementById("checkMessage");

getMessage.addEventListener("keyup", function() {
    validateMessage2();
});

function validateMessage2( ){
    if (getMessage.value.trim().length > 30 ){
        checkMessage.innerHTML = "Ghi chú không vượt quá 30 ký tự.";
    }  else{
        checkMessage.innerHTML = "";
    }
}
                                                    // Deliver date
var getDeliverdate = document.getElementById("datepicker");
var checkDeliverdate = document.getElementById("checkDeliver-date"); 

getDeliverdate.addEventListener("keyup", function() {
    validateDeliverDate();
});

function validateDeliverDate( ){
    if (getDeliverdate.value.trim().length == 0 ){
        checkDeliverdate.innerHTML = "Vui lòng chọn ngày giao hàng.";
    }  else{
        checkDeliverdate.innerHTML = "";
    }
}
                                                    // Deliver to
var getDeliverto = document.getElementById("deliver-to");
var checkDeliverto = document.getElementById("checkDeliver-to");

getDeliverto.addEventListener("keyup", function() {
    validateDeliverTo();
});

function validateDeliverTo( ){
    if (getDeliverto.value.trim().length == 0) {
        checkDeliverto.innerHTML = "Vui lòng điền địa chỉ của bạn";
    }  else if (getDeliverto.value.trim().length > 500 ){
        checkDeliverto.innerHTML = "Địa chỉ không vượt quá 500 ký tự.";
    }  else{
        checkDeliverto.innerHTML = "";
    }
}
                                                            // Order
var getOrder = document.getElementById("order");

getOrder.addEventListener("click", function() {
    validateName2();
    validateDeliverTo();
    validateDeliverDate();
    validateMessage2();
    validateCake();
});
document.getElementById("order").addEventListener("click", function(event){
    event.preventDefault()
  });