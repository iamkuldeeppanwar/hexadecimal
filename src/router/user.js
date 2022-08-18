const express = require("express");
const router = new express.Router();
const userData = require("../data/userData");

//Get All users
router.get("/getUsers", function (req, res) {
  res.send(userData);
});

module.exports = router;
