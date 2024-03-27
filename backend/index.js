require("dotenv").config();

const express = require("express");
const app = express();

const router = require("./router/auth-router");

const connectDB = require("./utils/db");

app.use("/api/auth", router);

connectDB().then(() => {
  app.listen(5000, () => {
    console.log("Server is running at port 5000");
  });
});
