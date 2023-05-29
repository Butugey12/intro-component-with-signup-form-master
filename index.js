const form = document.querySelector(".form")
const inputs = document.querySelectorAll(".form-input");
const errorMessages = document.querySelectorAll(".error-message");

form.addEventListener("submit" , function(e) {
  e.preventDefault();
  inputs.forEach((input , index)=>{
    if(input.type=="email") {
      if(validateEmail(input.value.trim())) {
        errorMessages[index].style.display = 'none';
      }
      else {
        errorMessages[index].style.display = 'block';
        input.style.borderColor = 'red';
      }
    }
    
    if (input.value.trim() === '') {
      errorMessages[index].style.display = 'block';
      input.style.borderColor = 'red';
    } 

    
    else {
      errorMessages[index].style.display = 'none';
      input.style.borderColor = '';

    }
    
  })
})
function validateEmail(email) {
  var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return re.test(String(email).toLowerCase());
}

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   if (!firstNameInput.value) {
//     console.log("First Name cannot be empty");
//   }

//   if (!lastNameInput.value) {
//     console.log("Last Name cannot be empty");
//   }

//   if (!emailInput.value) {
//     console.log("Email cannot be empty");
//   } else if (!validateEmail(emailInput.value)) {
//     console.log("Looks like this is not an email");
//   }

//   if (!passwordInput.value) {
//     console.log("Password cannot be empty");
//   }
// });
