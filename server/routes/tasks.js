const express = require("express");
const router = express.Router();
const User = require("../entities/Task");
const db = require("../database");

router.get("/", getAllTasks);

let userCollection = db.getCollection("tasks");

function getAllTasks(req, res)
{
    res.json(userCollection.find());
}



module.exports = router;
