const form = document.getElementById("form");
const Username = document.getElementById("Username");
const Email = document.getElementById("Email");
const Password1 = document.getElementById("Password1");
const Password2 = document.getElementById("Password2");

//Show input errror message
function showError(input,message){
  const formControl=input.parentElement;
  formControl.className= ' form-control error';
  const small=formControl.querySelector('small');
  small.innerText= message;
}
//show success outline
function showSuccess(input){
  const formControl=input.parentElement;
  formControl.className= 'form-control success';
}
// Check email is valid


function checkEmail(input){
  const re =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value)){
    showSuccess(input);
  } else{
    showError(input,'Email is not valid');
  }

}

//check required field
function checkRequired(inputArr){
inputArr.forEach(input => {
  if(input.value.trim()===''){
    showError(input,`${getFieldName(input)} is required `)
  }
  else{
    showSuccess(input);
  }
  
});
}
//GetField Name
function getFieldName(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}


//Check the password match
function PasswordMatch(input1,input2){
  if (input1.value!==input2.value){
    showError(input2,"Password doesnot match.");
  }
else{
  showSuccess(input);
}
}


//Check length of the input
function checkLength(input,min,max){
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} character`)
  }
  else if(input.value.length> max){
    showError(input, `${getFieldName(input)} must less than ${max} character`)
  }
  else{
    showSuccess(input);
  }
}
//Event Listeners
form.addEventListener('submit', function(e){
  e.preventDefault();

  // It is one of the non reliable method
//   if (Username.value === "") {
//     showError(Username, "UserName is Required");
//   } else {
//     showSuccess(Username);
//   }

//   if (Email.value === "") {
//     showError(Email, "Email is Required");
//   }
//   else if(! isEmailValid(Email.value)){
//     showError(Email,"Email is not valid");
//   }
//   else{ 
//     showSuccess(Email);

//   }

   

//   if (Password1.value === "") {
//     showError(Password1, "Password is Required");
//   } else {
//     showSuccess(Password1);
//   }
//   if (Password2.value === "") {
//     showError(Password2, "Password is Required");
//   } else {
//     showSuccess(Password2);
//   }

checkRequired([Username,Email,Password1,Password2]);
checkLength(Username,3,25);
checkLength(Password1,6,15);
checkEmail(Email);
PasswordStrength(Password1);
PasswordMatch(Password1,Password2);



})
