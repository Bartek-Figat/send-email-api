require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const { sendgrid_api_key } = process.env;

sgMail.setApiKey(sendgrid_api_key);

const sendEmail = async (user) => {
  try {
    const { userfullname, useremail, message } = user;
    const msg = {
      to: `figat29@gmail.com`,
      from: `${useremail}`,
      subject: `Informacje kontaktowe`,
      text: "Informacje kontaktowe",
      html: `<h1>Email addres</h1>: ${useremail}<br> 
             <h1>Full name</h1>: ${userfullname}<br> 
             <h1>Message</h1>: ${message}<br>`,
    };
    const status = await sgMail.send(msg);
    return status;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendEmail,
};
