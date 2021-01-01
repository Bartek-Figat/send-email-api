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

    const user = {
      useremail,
      userfullname,
      message,
    };
    await sendEmail(user);
    res.json({ msg: await sendEmail(user) });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = { postRouter };
