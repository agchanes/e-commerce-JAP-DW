const localhost = "http://localhost:3000/"
// const express = require('express');
// const app = express();

console.log(localhost);

// const categories = require('./categories.json');
// const products = require('./products.json');
// const cart_buy = require('./cart_buy.json');
// const cart_info = require('./cart_info.json');
// const product_info_comments = require('./product_info_comments.json');
// const product_info = require('./product_info.json');
// const categories_info = require('./categories_info.json');
// const publish = require('./publish.json');

const CATEGORIES_URL = localhost+"categories";
const PUBLISH_PRODUCT_URL = localhost+"publish";
const CATEGORY_INFO_URL = localhost+"categories_info";
const PRODUCTS_URL = localhost+"products";
const PRODUCT_INFO_URL = localhost+"product_info";
const PRODUCT_INFO_COMMENTS_URL = localhost+"product_info_comments";
const CART_INFO_URL = localhost+"cart_info";
const CART_BUY_URL = localhost+"cart_buy";

console.log(PRODUCTS_URL);


/* 
function levantarServidor(json){

  app.get('/'+json'', function(req, res){
    res.setHeader("Access-Control-Allow-Origin","*")
    res.set('Content-Type', 'application/json')
    res.send(json);
  })
}
*/


// app.get('/products', function(req, res){
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.set('Content-Type', 'application/json')
//     res.send(products);
// })

// app.get('/categories', function(req, res){
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.set('Content-Type', 'application/json')
//     res.send(categories);
// })

// app.get('/cart_buy', function(req, res){
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.set('Content-Type', 'application/json')
//     res.send(cart_buy);
// })

// app.get('/cart_info', function(req, res){
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.set('Content-Type', 'application/json')
//     res.send(cart_info);
// })

// app.get('/product_info_comments', function(req, res){
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.set('Content-Type', 'application/json')
//     res.send(product_info_comments);
// })

// app.get('/product_info', function(req, res){
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.set('Content-Type', 'application/json')
//     res.send(product_info);
// })

// app.get('/categories_info', function(req, res){
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.set('Content-Type', 'application/json')
//     res.send(categories_info);
// })

// app.get('/publish', function(req, res){
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.set('Content-Type', 'application/json')
//     res.send(publish);
// })

// app.listen(3000, function(){
//     console.log('servidor levantado!');
// })

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


//con esto llamamos al username en el storage y lo ponemos en el div
document.addEventListener("DOMContentLoaded", function(e){

  document.getElementsByName("userName")[0].textContent = localStorage.getItem("username");

  document.getElementsByName("signOutBTN")[0].onclick = function(){
    localStorage.clear();
    window.location.href = "index.html"
  }

});