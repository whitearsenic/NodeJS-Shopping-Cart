var express = require('express');
var router = express.Router();
var Product = require('../models/product');




var json = require('hbs-json');
var hbs = require('hbs');

hbs.registerHelper('json', json);


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i=0; i<docs.length; i+= chunkSize)
    {
      productChunks.push(docs.slice(i, i+chunkSize));
    }
    res.render('shop/index', {title: 'Keyboard Shop', products: productChunks});
  });
});

module.exports = router;
