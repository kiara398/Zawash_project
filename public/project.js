//validation of login page
let validation = () =>{
let username = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
//using regular expressions to validate email address and password
let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordval = /^[0-9a-zA-Z]+$/;

// username.addEventListener('input', e =>{
//   e.preventDefault();
//   if(username.value.match(emailVal)) {
//     username.style.borderBottom = "2px solid green";
//     error1.innerHTML = "";
//   } else {
//     username.style.borderBottom = "2px solid coral";
//     error1.innerHTML = "please fill in valid username";
//     error1.style = "font-size:12px; color: coral; font-style:italic;";
//   }

// })
    if(username.value.match(emailVal)) {
      username.style.borderBottom = "2px solid green";
      error1.innerHTML = "";
    } else {
      username.style.borderBottom = "2px solid coral";
      error1.innerHTML = "please fill in valid username";
      error1.style = "font-size:12px; color: coral; font-style:italic;";
    }

    if (password.value.match(passwordval) && password.value.length >= 8) {
      password.style.borderBottom = "2px solid green";
      error2.innerHTML = "";
    } else {
      password.style.borderBottom = "2px solid coral";
      error2.innerHTML = "please fill in valid password";
      error2.style = "font-size:12px; color: coral; font-style:italic;";
    }
}
// //validation of registration page
let validation2 = () =>{
 

  let fullname = document.register.fullnames;
  let gender = document.register.Gender;
  let dob = document.register.dob;
  let residence = document.register.res;
  let nin = document.register.nin;
  let phone = document.register.phonenumber;
  let errornames = document.getElementById('errornames');
  let errorgender = document.getElementById('errorgender');
  let errordob = document.getElementById('errordob');
  let errores = document.getElementById('errores');
  let errornin = document.getElementById('errornin');
  let errorphone = document.getElementById('errorphone');
//if statements
if(fullname.value == ''){
  fullname.style.borderBottom = '2px solid coral';
  errornames.innerHTML = 'fill in valid names'
  errornames.style = 'font-size:15px; color:maroon;'
  return false;
} else{
  fullname.style.border = '2px solid green';
  errornames.innerHTML = '';
}

if(gender.value == "gender"){
  gender.style.borderBottom = '2px solid coral';
  errorgender.innerHTML = 'select your gender'
  errorgender.style = 'font-size:15px; color:maroon;'
  return false;
} else{
  gender.style.border = '2px solid green';
  errorgender.innerHTML = '';
}

if(dob.value == ''){
  dob.style.borderBottom = '2px solid coral';
  errordob.innerHTML = 'fill in valid date of birth'
  errordob.style = 'font-size:15px; color:maroon;'
  return false;
} else{
  dob.style.border = '2px solid green';
  errordob.innerHTML = '';
}

if(residence.value == ''){
  residence.style.borderBottom = '2px solid coral';
  errores.innerHTML = 'fill in residence'
  errores.style = 'font-size:15px; color:maroon;'
  return false;
} else{
  residence.style.border = '2px solid green';
  errores.innerHTML = '';
}

if(nin.value == ''){
  nin.style.borderBottom = '2px solid coral';
  errornin.innerHTML = 'fill in valid NIN'
  errornin.style = 'font-size:15px; color:maroon;'
  return false;
} else{
  nin.style.border = '2px solid green';
  errornin.innerHTML = '';
}

if(phone.value == ''){
  phone.style.borderBottom = '2px solid coral';
  errorphone.innerHTML = 'fill in phone number'
  errorphone.style = 'font-size:15px; color:maroon; '
  return false;
} else{
  phone.style.border = '2px solid green';
  errorphone.innerHTML = '';
 
}
return true
}