function validateForm() {
  var fname = document.forms["myForm"]["fname"].value;
  var lname = document.forms["myForm"]["lname"].value;
  var emailid = document.forms["myForm"]["emailid"].value;
  var phonenum = document.forms["myForm"]["phonenum"].value;
  var password = document.forms["myForm"]["password"].value;
  var error_message = document.getElementById('error_message')
  var text;
  error_message.style.padding = "10px";
  if (fname.length < 6) {
    text = "Enter a correct firstname greater than 6 letters"
    error_message.innerHTML = text;
    return false;
  }
  if (lname.length < 1) {
    text = "Enter a correct lastname"
    error_message.innerHTML = text;
    return false;
  }
  if (emailid.length < 6) {
    text = "Enter a valid email  "
    error_message.innerHTML = text;
    return false;
  }
  if ( phonenum.length != 10) {
      text = "Enter a valid phone number  "
      error_message.innerHTML = text;
      return false;
    }
    if (password.length < 6) {
      text = "Enter a password atleast six combination character,number"
      error_message.innerHTML = text;
      return false;
    }
}
