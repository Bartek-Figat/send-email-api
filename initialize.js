require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { postRouter } = require("./routes/index");

const initialize = () => {
  const server = express();
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(cors());
  server.use(helmet());
  server.use(postRouter);
  return server;
};

module.exports = {
  initialize,
};
