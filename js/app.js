
const express = require('express');
const app = express();

const products = require('./products.json');
const categories = require('./categories.json');
const cart_buy = require('./cart_buy.json');
const cart_info = require('./cart_info.json');
const product_info_comments = require('./product_info_comments.json');
const product_info = require('./product_info.json');
const categories_info = require('./categories_info.json');
const publish = require('./publish.json');


 

app.get('/products', function(req, res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.set('Content-Type', 'application/json')
    res.send(products);
})

app.get('/categories', function(req, res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.set('Content-Type', 'application/json')
    res.send(categories);
})

app.get('/cart_buy', function(req, res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.set('Content-Type', 'application/json')
    res.send(cart_buy);
})

app.get('/cart_info', function(req, res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.set('Content-Type', 'application/json')
    res.send(cart_info);
})

app.get('/product_info_comments', function(req, res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.set('Content-Type', 'application/json')
    res.send(product_info_comments);
})

app.get('/product_info', function(req, res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.set('Content-Type', 'application/json')
    res.send(product_info);
})

app.get('/categories_info', function(req, res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.set('Content-Type', 'application/json')
    res.send(categories_info);
})

app.get('/publish', function(req, res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.set('Content-Type', 'application/json')
    res.send(publish);
})

app.listen(3000, function(){
    console.log('servidor levantado!');
})