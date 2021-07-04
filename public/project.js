//validation of login page

let username = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
//using regular expressions to validate email address and password
let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordval = /^[0-9a-zA-Z]+$/;

//adding an event listener
username.addEventListener(
  "input",
  (checkName = () => {
    if (username.value.match(emailVal)) {
      username.style.borderBottom = "2px solid green";
      error1.innerHTML = "";
    } else {
      username.style.borderBottom = "2px solid coral";
      error1.innerHTML = "please fill in valid username";
      error1.style = "font-size:12px; color: coral; font-style:italic;";
    }
  })
);

password.addEventListener(
  "input",
  (checkPassword = () => {
    if (password.value.match(passwordval) && password.value.length >= 8) {
      password.style.borderBottom = "2px solid green";
      error2.innerHTML = "";
    } else {
      password.style.borderBottom = "2px solid coral";
      error2.innerHTML = "please fill in valid password";
      error2.style = "font-size:12px; color: coral; font-style:italic;";
    }
  })
);

//validation of registration page
