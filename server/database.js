const Loki = require("lokijs");
const User = require('./entities/User');


const db = new Loki('demo.json');

const users = db.addCollection('users');
const products = db.addCollection('products');

users.insert(new User("Dominik"));
users.insert(new User("David"));
users.insert(new User("Denise"));
users.insert(new User("Matthias"));
users.insert(new User("Philipp"));
users.insert(new User("Steve"));

module.exports = db;