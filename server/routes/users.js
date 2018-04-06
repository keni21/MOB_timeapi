const express = require("express");
const router = express.Router();
const User = require("../entities/User");
const db = require("../database");

router.get("/", getAllUsers);
router.get("/:ID", singleUser);

let userCollection = db.getCollection("users");

function getAllUsers(req, res) 
{
  res.json(userCollection.find());
}

function singleUser (req, res)
{
  res.json(userCollection.get(req.params.ID));
}

module.exports = router;
