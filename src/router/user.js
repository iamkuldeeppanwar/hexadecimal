const express = require("express");
const router = new express.Router();
const userData = require("../data/userData");

//Get All users
router.get("/getUsers", async function (req, res) {
  await res.json(userData);
});

module.exports = router;
