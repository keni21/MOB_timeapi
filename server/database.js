const Loki = require("lokijs");
const User = require('./entities/User');
const Product = require('./entities/Product');

const db = new Loki('demo.json');

const users = db.addCollection('users');
const products = db.addCollection('products');

users.insert(new User("admin", "admin@admin.at", "admin"));
users.insert(new User("test1", "test1@test1.at", "test1"));
users.insert(new User("test2", "test2@test2.at", "test2"));

products.insert(new Product("AngularJS 1 Buch", "Das neue AngularJS 1 Buch.", 10.99, "https://static.pexels.com/photos/256396/pexels-photo-256396.jpeg"));
products.insert(new Product("AngularJS 2 Buch", "Das neue AngularJS 2 Buch.", 20.99, "https://static.pexels.com/photos/256396/pexels-photo-256396.jpeg"));
products.insert(new Product("AngularJS 3 Buch", "Das neue AngularJS 4 Buch.", 40.99, "https://static.pexels.com/photos/256396/pexels-photo-256396.jpeg"));
products.insert(new Product("AngularJS 4 Buch", "Das neue AngularJS 5 Buch.", 50.99, "https://static.pexels.com/photos/256396/pexels-photo-256396.jpeg"));
products.insert(new Product("AngularJS 5 Buch", "Das neue AngularJS 100 Buch.", 100.99, "https://static.pexels.com/photos/256396/pexels-photo-256396.jpeg"));

module.exports = db;