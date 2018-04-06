const express = require('express');
const router = express.Router();
const Product = require('../entities/Product');
const db = require('../database');

router.get('/', getAllProducts);
router.get('/:productId', getProduct);
router.post('/', addProduct);
router.delete('/:productId', deleteProduct);
router.patch('/:productId', editProduct);

let collection = db.getCollection('products');

function getAllProducts(request, response) {
    if (request.query.searchTerm  && request.query.searchTerm != "undefined") {
        let searchedProducts = collection.where(function (obj) {
            return obj.name.includes(request.query.searchTerm);
        });
        response.json(searchedProducts);
    } else {
        response.json(collection.find());
    }
}

function getProduct(request, response) {
    response.json(collection.get(request.params.productId));
}

function addProduct(request, response) {
    let product = new Product(request.body.name, request.body.description, request.body.price);
    response.json(collection.insert(product));
}

function deleteProduct(request, response) {
    let productToRemove = collection.get(request.params.productId);
    collection.remove(productToRemove);
    response.json(productToRemove);
}

function editProduct(request, response) {
    let productToEdit = collection.get(request.params.productId);
    productToEdit.name = request.body.name;
    productToEdit.description = request.body.description;
    productToEdit.price = request.body.price;
    response.json(productToEdit);
}

module.exports = router;