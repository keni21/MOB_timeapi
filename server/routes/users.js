const express = require("express");
const router = express.Router();
const User = require("../entities/User");
const db = require("../database");

router.get("/", getAllUsers);
router.get("/:ID", singleUser);
router.post("/",insertUser);
router.delete("/:ID",deleteUser);

let userCollection = db.getCollection("users");

function getAllUsers(req, res) 
{
  res.json(userCollection.find());
}

function singleUser (req, res)
{
  res.json(userCollection.get(req.params.ID));
}

function insertUser (req, res)
{
  let username = new User(req.body.username);
  userCollection.insert(username);
  res.json(username);
}

function deleteUser(req, res)
{ 
  let user = userCollection.get(req.params.ID)
  userCollection.remove(user);
  res.json(user);
}

module.exports = router;
