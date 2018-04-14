const express = require("express");
const router = express.Router();

const User = require("../entities/Task");
const db = require("../database");
const Task = require("../entities/Task");

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:ID", getTaskbyuserid);
router.post("/:ID", updateTask);
router.delete("/:ID", deleteTask);


let taskCollection = db.getCollection("tasks");

function getAllTasks(req, res){
    //user ID einbauen dann werden nur die Tasks von dem einen User wiedergegeben (noch nicht implementiert)
    res.json(taskCollection.find());
}

function getTaskbyuserid (req, res){
    //abfrage auf User ID
    let usertask = taskCollection.where(checkid);
    function checkid(daten) {return (daten.userid == req.params.ID); }
    //Rückgabe von Daten
    res.json(usertask);
}
function createTask(req, res) {
    let name = req.body.name;
    let userid = req.body.userid;
    //hier abfrage ob Task schon vorhanden ist
    //where function auslesen und if für fehler Ausgabe

    //danach anlegen von neuem Task wenn noch nicht vorhanden
    let task = new Task();
    task.name = name;
    this.userid = userid;
    taskCollection.insert(task);

    res.json(taskCollection.find());
}

function updateTask(req, res) {
    let task = taskCollection.get(req.params.ID);
    //console.log(task.time);
    //console.log(task);
    //console.log(req.body.time);
    //hier muss richtig vorgegangen werden, damit man auf den Wert zugreift
    let addtime = req.body.time;
    let testtime = (task.time + addtime);
    //Abfrage auf minus Zeit durchführen
    if (testtime < 0) {
        res.json(false);
    } else {
        //Fügt Zeit hinzu oder rechnet Zeit weg ja nach vorzeichenwert
        task.time += addtime;
        //console.log(task.time);
        taskCollection.update(task);
    }


    res.json(taskCollection.get(req.params.ID));

}

function deleteTask(req, res)
{
    let task = taskCollection.get(req.params.ID);
    taskCollection.remove(task);
    res.json(task);
}

module.exports = router;
