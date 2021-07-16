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

var FirstName = document.getElementById('firstName');
var LastName= document.getElementById('lastName');
var DOB = document.getElementById('DateOfBirth');
var Address = document.getElementById('address');
var ZawashId = document.getElementById('ZawashId');
var Gender = document.getElementById('gender');
var Tel = document.getElementById('tel');
var NationalId = document.getElementById('nationalid');
var Submit = document.getElementById("submit");
//for the error IDs
var FirstNameError = document.getElementById('firstNameerror');
var LastNameError = document.getElementById('lastNameerror');
var DOBError  = document.getElementById('DateOfBirtherror');
var AddressError  = document.getElementById('addresserror');
var ZawashIdError  = document.getElementById('ZawashIderror');
var GenderError  = document.getElementById('gendererror');
var TelError  = document.getElementById('telerror');
var NationalIdError  = document.getElementById('nationaliderror');

// For the regular expressions to be used 
var NameReg = /^[A-Z]([a-z])+$/;
var ZawashIdReg  = /^Zwash([0-9]{3})$/;
var NationalIdReg  = /^[A-Z]{3}[0-9A-Z]{8}$/; 

//This is for the Zawash Id
let validateZawashID =() => {                                  

    if (!(ZawashId.value.length ==8 )) {
        ZawashIdError.innerHTML = ' Zwash ID Should have 8 Characters ';
        ZawashId.style.border = "1px solid red"
       return false;
    } else if ((ZawashId.value.length== 8) && (ZawashId.value.match(ZawashIdReg))) {
        ZawashIdError.innerHTML = '';
        ZawashId.style.border = "1px solid green"
    } else if (!(ZawashId.value.match(ZawashIdReg))) {
        ZawashIdError.innerHTML = 'Zwash ID starts with Zwash and 3 numbers follow  ';
        ZawashId.style.border = "1px solid red"
        return false;
    } else if (ZawashId.value.length=0) {
        ZawashIdError.innerHTML = '';
        
    }
}

///national ID check
let validateNationalID =() => {                                  

    if (let validateNationalID =() => {                                  

      if (!(NationalId.value.length==11)) {
          NationalIdError.innerHTML = ' National ID have 11 Characters';
          NationalId.style.border = "1px solid red"
         return false;
      } else if (NationalId.value.length == 11 && NationalId.value.match(NationalIdReg)) {
          NationalIdError.innerHTML = '';
          NationalId.style.border = "1px solid green"
      } else if (!(NationalId.value.length ==11 && NationalId.value.match(NationalIdReg))) {
          NationalIdError.innerHTML = 'Starts with 3 Capital letters then 8 other charcters ';
          NationalId.style.border = "1px solid red"
          return false;
      } else if (NationalId.value.length=0) {
          NationalIdError.innerHTML = '';
          
      }
  }
  
  //This is for validating the first name
  let validateFirstName =() => {                                  
  
      if (FirstName.value.length < 8) {
          FirstNameError.innerHTML = ' Name Should be atleast 8 Characters ';
          FirstName.style.border = "1px solid red"
         return false;
      } else if (FirstName.value.length>= 8 && FirstName.value.match(NameReg)) {
          FirstNameError.innerHTML = '';
          FirstName.style.border = "1px solid green"
      } else if (!(FirstName.value.length<= 8 && FirstName.value.match(NameReg))) {
          FirstNameError.innerHTML = 'Name start with Capital letter ';
          FirstName.style.border = "1px solid red"
          return false;
      } else if (FirstName.value.length=0) {
          FirstNameError.innerHTML = '';
          
      }
  }
  //This is for validating the last name
  
  let validateLastName =() => {                                  
  
      if (LastName.value.length < 8) {
          LastNameError.innerHTML = ' Name Should be atleast 8 Characters ';
          LastName.style.border = "1px solid red"
         return false;
      } else if (LastName.value.length>= 8 && LastName.value.match(NameReg)) {
          LastNameError.innerHTML = '';
          LastName.style.border = "1px solid green"
      } else if (!(LastName.value.length<= 8 && LastName.value.match(NameReg))) {
          LastNameError.innerHTML = 'Name start with Capital letter ';
          LastName.style.border = "1px solid red"
          return false;
      } else if (LastName.value.length=0) {
          LastNameError.innerHTML = '';
          
      }
  }
  
  
  //CHECKING WHETHER THE FIELDS ARE EMPTY
  var validate =()=>{
          
      //Package
      if(Gender.value==""  ){
          Gender.style.border = "1px solid red"
          GenderError.innerHTML ="Please fill field"
      return false;
      } 
      else {
          Gender.style.border = "1px solid green"
          GenderError.innerHTML =""    
              }   
      //Make
      if(Tel.value==""  ){
          Tel.style.border = "1px solid red"
          TelError.innerHTML ="Please fill field"
      return false;
      } 
      else {
          Tel.style.border = "1px solid green"
          TelError.innerHTML =""    
              }   
      ////DOB
      if(DOB.value==""  ){
          DOB.style.border = "1px solid red"
          DOBError.innerHTML ="Please fill field"
          return false;
          } 
      else {
          DOB.style.border = "1px solid green"
          DOB.innerHTML =""    
              }   
  
  }
    //This is used to merge all the fuctions into one grand function that i then call on the form
  let myvalidations =()=> {
      validate(); 
      validateLastName();
      validateFirstName();
      validateZawashID();
      validateNationalID();
      return false;
      }
  
     
  
  
  
    }  

