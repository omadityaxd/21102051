const express = require("express");
const Mongoclient = require("mongodb").MongoClient;
const cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./models/Users");
const { useRoutes } = require("react-router-dom");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://admin:21102051@testcluster.2gf52.mongodb.net/profile?retryWrites=true&w=majority&appName=TestCluster"
  )
  .then(() => {
    // listen for requests
    app.listen(3001, () => {
      console.log("connected to db & listening on port 3001");
    });
  })
  .catch((error) => {
    console.log(error);
  });

const getUsers = async (req, res) => {
  try {
    let result = await userModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

app.use("/getusers", getUsers);
app.post("/test/register", async (req, res) => {
  const user = req.body;
  if (user.accessCode === "zpKKbc") {
    const newUser = new userModel(user);
    await newUser.save();
    res.json(user);
  } else {
    res.json("Invalid Access Code");
  }
});

//PRODUCTS
