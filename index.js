require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const studentRouter = require("./routers/student.route.js");

app.use(express.json());
app.use("/api/student", studentRouter);

app.get("/", (req, res) => {
  console.log("Hello World");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening in port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Connection Failed!, ${err}`);
  });

  module.exports = app;