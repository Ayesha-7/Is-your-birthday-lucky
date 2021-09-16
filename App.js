 const dateInput = document.querySelector("#date-input");
 const numberInput = document.querySelector("#number-input");
 const checkButton = document.querySelector("#check-button");
 const outputMsg = document.querySelector("#output");

 console.log(dateInput.value)
 console.log(numberInput.value)
 console.log(checkButton)
 outputMsg.style.display = "none";

 //  document.querySelector('#somedivorspan').setAttribute('disabled', true);


 checkButton.addEventListener("click", function validateInput() {
     outputMsg.style.display = "none";
     var numInput = Number(numberInput.value);
     var birthdate = dateInput.value.replaceAll("-", "");
     console.log(numInput);
     console.log(birthdate);

     if (dateInput.value == "" || numberInput.value == "") {
         showMessage("❗ All fields should be filled");
     } else if (numInput <= 0 || numberInput.value == "") {
         showMessage("❗ Enter a number greater than zero");
     } else {
     checkBirthdateLucky(numInput, birthdate);
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

     if (sum % numInput == 2) {
         showMessage("Lucky You!!✨ Your birthdate is lucky🥳🍀");
     } else {
         showMessage("Your birthdate is not lucky....But hey luck wuck kuch nahi hota....Cheer up✨")
     }
 }