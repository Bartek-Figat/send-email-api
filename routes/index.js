const express = require("express");
const { validationResult } = require("express-validator");
const { sendEmail } = require("../controller/send.email");
const { contactFormValidation } = require("../middleware/validation");
const { Router } = express;
const postRouter = Router();

postRouter.get("/", async (req, res) => {
  try {
    res.json({ msg: "Email" });
  } catch (error) {
    console.log(`Error from post: ${error}`);
  }
});

postRouter.post("/", async (req, res) => {
  try {
    const { userfullname, useremail, message } = req.body.val;

    if (
      !validateEmail(useremail) ||
      isEmpty(userfullname) ||
      isEmpty(message)
    ) {
      return res.json({ status: 422 });
    }

    const user = {
      useremail,
      userfullname,
      message,
    };
    await sendEmail(user);
    res.json({ msg: "ok" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

function isEmpty(str) {
  return !str || 0 === str.length;
}

module.exports = { postRouter };
