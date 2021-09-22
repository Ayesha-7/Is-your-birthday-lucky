 const dateInput = document.querySelector("#date-input");
 const numberInput = document.querySelector("#number-input");
 const checkButton = document.querySelector("#check-button");
 const outputMsg = document.querySelector("#output");
 const privacyMsg = document.querySelector(".privacy-notice");
 const closeButton = document.querySelector("#close-button");
 const delayGif = document.querySelector("#delay-gif");

 delayGif.style.display = "none";
 outputMsg.style.display = "none";
 privacyMsg.style.display = "block";

 //  document.querySelector('#somedivorspan').setAttribute('disabled', true);

 closeButton.addEventListener("click", function hidePolicyMsg() {
     privacyMsg.style.display = "none";
 })

 checkButton.addEventListener("click", function validateInput() {
     outputMsg.style.display = "none";
     var numInput = Number(numberInput.value);
     var birthdate = dateInput.value.replaceAll("-", "");

     if (dateInput.value == "" || numberInput.value == "") {
         showMessage("❗ All fields should be filled");
     } else if (numInput <= 0 || numberInput.value == "") {
         showMessage("❗ Enter a number greater than zero");
     } else {
         output.style.display = 'none'
         delayGif.style.display = 'block'
         setTimeout(() => {
             output.style.display = 'block'
             delayGif.style.display = 'none'
             checkBirthdateLucky(numInput, birthdate)
         }, 3300)
     }
 })

 function showMessage(msg) {
     outputMsg.style.display = "block";
     outputMsg.innerText = msg;
 }

 function checkBirthdateLucky(numInput, birthdate) {
     var sum = 0;
     for (var i = 0; i < birthdate.length; i = i + 1) {
         sum = sum + Number(birthdate.charAt(i));
     }

     if (sum % numInput == 0) {
         showMessage("Lucky You!!✨ Your birthdate is lucky🥳🍀");
     } else {
         showMessage("Your birthdate is not lucky 🙁")
     }
 }