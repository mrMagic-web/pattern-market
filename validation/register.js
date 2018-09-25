const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.userName = !isEmpty(data.userName) ? data.userName : ''; 
  data.email = !isEmpty(data.email) ? data.email : ''; 
  data.password = !isEmpty(data.password) ? data.password : ''; 
  data.password2 = !isEmpty(data.password2) ? data.password2 : ''; 

  // Validate userName
  if(!validator.isLength(data.userName, { min: 5, max: 30 })) {
    errors.userName = "Name must be between 5 and 30 characters";
  }
  if(validator.isEmpty(data.userName)) {
    errors.userName = "Name field is required";
  }

  // Validate email
  if(!validator.isEmail(data.email)) {
    errors.email = "Invalid email";
  }
  if(validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // Validate password
  if(validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if(!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  // Validate password2
  if(validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if(!validator.isLength(data.password2, { min: 6, max: 30 })) {
    errors.password2 = "Confirm password must be between 6 and 30 characters";
  }
  if(!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match"
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
}