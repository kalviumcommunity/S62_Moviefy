const express = require("express");
const router = express.Router();
const userModel = require("../models/user.models.js");
const { getDB } = require("../DB/mongo.client.js");

router.get("/user", async (req, res) => {
  const data = await userModel.find();
  res.status(200).send({ message: "jolly jolly :)", data });
});

router.post("/user", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new userModel({ name, email, password });
  await user.save();
  res.status(201).send({ message: "User created successfully", user });
});

router.put("/user/:id", async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;

  const checkIfExist = await userModel.findOne(id);

  if (!checkIfExist) {
    res
      .status(404)
      .send({ message: "What is this, who are you people,you are not here " });
  }

  const findAndUpdate = await userModel.findByIdAndUpdate(
    { id: _id },
    {
      name,
      email,
      password,
    },
    { new: true }
  );

  return res
    .status(201)
    .send({ message: "anna ella jolly", updatedResult: findAndUpdate });
});

router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const checkIfExist = await userModel.findOne(id);
  if (!checkIfExist) {
    res.status(404).send({ message: "No record found " });
  }

  await userModel.findByIdAndDelete({ id: _id });
  const deleteData = await userModel.find();

  res.status(200).send({ message: "done", data: deleteData, success: true });
});

router.get("/movie", async (req, res) => {
  try {
    const db = getDB();
    const userData = await db.find().toArray();
    res.status(200).send({ message: "done", data: userData, success: true });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
