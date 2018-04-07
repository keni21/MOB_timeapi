const Loki = require("lokijs");
const User = require('./entities/User');
const Task = require('./entities/Task');


const db = new Loki('demo.json');

const users = db.addCollection('users');
const tasks = db.addCollection('tasks');

users.insert(new User("Dominik"));
users.insert(new User("David"));
users.insert(new User("Denise"));
users.insert(new User("Matthias"));
users.insert(new User("Philipp"));
users.insert(new User("Steve"));

tasks.insert(new Task("Test Task"));

module.exports = db;