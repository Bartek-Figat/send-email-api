const { check } = require("express-validator");

const contactFormValidation = [
  check(`userfullname`, "Name is required").not().isEmpty(),
  check(`useremail`, "Please fill out a valid email address").isEmail(),
  check(`message`, "Message is required").not().isEmpty(),
];

module.exports = {
  contactFormValidation,
};
