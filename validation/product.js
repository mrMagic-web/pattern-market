const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProductInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : ''; 
  data.company = !isEmpty(data.company) ? data.company : ''; 

  if(Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  // Validate company
  if(Validator.isEmpty(data.company)) {
    errors.company = "company field is required";
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
}