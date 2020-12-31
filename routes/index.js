const express = require("express");
const { sendEmail } = require("../controller/send.email");
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
    res.json({ msg: "ok" });
  } catch (error) {
    console.log(`Error from post: ${error}`);
  }
});

module.exports = { postRouter };
