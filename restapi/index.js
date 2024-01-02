const express = require("express");
const user = require("./module/User");
require("./dbConnect");
// const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.post("/user", async (req, res) => {
  try {
    const data = new user(req.body);
    await data.save();
    res.send({ result: "done", message: "user created!" });
  } catch (error) {
    res.status(400).send({ result: "failed", message: error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const data = await user.findOne({ username: req.body.username });
    if (data) {
      // authanticate password
      const result = req.body.password === data.password;
      if (result) {
        res.send({ result: "done", message: "successfully logged in!!" });
      } else {
        res
          .status(400)
          .send({ result: "error", message: "password doesn't match" });
      }
    } else {
      res.status(400).send({ result: "error", message: "user doesn't exist" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ result: "failed", message: "internal server error" });
  }
});

app.get("/user", async (req, res) => {
  try {
    const data = await user.find();
    res.send({ result: "done", data: data });
  } catch (error) {
    res.status(500).send({ result: "fail", message: "internal server error" });
  }
});

app.get("/user/:name", async (req, res) => {
  try {
    const data = await user.findOne({ name: req.params.name });
    res.send({ result: "done", data: data });
  } catch (error) {
    res.status(500).send({ result: "fail", message: "internal server error" });
  }
});

app.delete("/user/:name", async (req, res) => {
  try {
    const data = await user.deleteOne({ name: req.params.name });
    res.send({ result: "done", data: `data is deleted ${data}` });
  } catch (error) {
    res.status(500).send({ result: "fail", message: "internal server error" });
  }
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
