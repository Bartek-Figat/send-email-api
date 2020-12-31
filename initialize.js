require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const { postRouter } = require("./routes/index");

const initialize = () => {
  const server = express();
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());
  server.use(morgan("dev"));
  server.use(
    cors({
      credentials: true,
      origin: "https://bartek-figat.github.io/webpack.github.io/",
    })
  );
  server.use(helmet());
  server.use(postRouter);
  return server;
};

module.exports = {
  initialize,
};
