const express = require("express");
const router = express.Router();
const User = require("../entities/Task");
const db = require("../database");

router.get("/", getAllTasks);
router.get("/:ID", singleTask);
router.post("/:ID", updateTask);
router.delete("/:ID", deleteTask);


let taskCollection = db.getCollection("tasks");

function getAllTasks(req, res){
    res.json(taskCollection.find());
}

function singleTask (req, res){
    res.json(taskCollection.get(req.params.ID));
}

function updateTask(req, res){
    let task = taskCollection.get(req.params.ID);
    //console.log(task.time);
    //console.log(task);
    //console.log(req.body.time);
    //hier muss richtig vorgegangen werden, damit man auf den Wert zugreift
    let addtime = req.body.time;

    //Fügt Zeit hinzu oder rechnet Zeit weg ja nach vorzeichenwert
    task.time += addtime;
    console.log(task.time);
    taskCollection.update(task);
    res.json(taskCollection.get(req.params.ID));

}

function deleteTask(req, res)
{
    let task = taskCollection.get(req.params.ID);
    taskCollection.remove(task);
    res.json(task);
}

module.exports = router;
