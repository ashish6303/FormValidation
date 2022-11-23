function cap() {
  var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'
    , 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '+'];
  var a = alpha[Math.floor(Math.random() * 71)];
  var b = alpha[Math.floor(Math.random() * 71)];
  var c = alpha[Math.floor(Math.random() * 71)];
  var d = alpha[Math.floor(Math.random() * 71)];
  var e = alpha[Math.floor(Math.random() * 71)];
  var f = alpha[Math.floor(Math.random() * 71)];

  var final = a + b + c + d + e + f;
  document.getElementById("capt").value = final;
}

function validcap() {
  // For Checking Length of Name.
  var username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  let mobile = document.getElementById('mobile').value;
  var pass1 = document.getElementById('pass1').value;
  var pass2=document.getElementById('pass2').value;
  var stg1 = document.getElementById('capt').value;
  var stg2 = document.getElementById('textinput').value;
  if (username.length < 6) {
    alert("Name Must be more than 5 digits")
    return false;
  }    
  // For Checking Length Mobile Number.
  else if(mobile.length != 10){
    alert("Mobile number must be in 10 digits");
    return false;
  }
  else if(mobile =='0123456789'){
    alert("Wrong Mobile number");
    return false;
  }
  // This is for password verifaction
  else if(pass1.length<=8 || pass1 == "password" || pass1 == username) {
    alert("Please Enter Valid Password")
    return false
  }
  else if(pass1!=pass2){
    alert("Both password must be same")
    return false;
  }
  // This is for captcha verification
  else if(stg2.length == 0){
    alert("Please enter captcha");
    return false;
  }
  else if (stg1 != stg2) {
    alert("Please enter a valid captcha");
    return false;
  } else {
    alert("form validation is successfull");
    return true;
  }
  // else {
  //   return true;
  // }





  // For Checking Length Mobile Number.
  // if(mobile.length!=10){
  // alert("Mobile number must be equal than 10");
  // return false;
  // }else if(mobile =='123456789'){
  // alert("Wrong Mobile number");
  // return false;
  // }else{
  // return true;
  // }

  // For checking password 
  // var pass1 = document.getElementById('pass1').value;
  // var pass2=document.getElementById('pass2').value;
  // if (pass1 != document.getElementById('pass2').value) {
  //   alert("Both password must be same")
  //   return false;
  // }
  // else {
  //   return true;
  // }

  // For Captcha Verification.
  
}
