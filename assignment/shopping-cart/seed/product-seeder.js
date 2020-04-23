var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useUnifiedTopology: true } );

var products =
        [
            new Product ({
            imagePath: 'https://cdn.shopify.com/s/files/1/0024/6982/2510/products/108-6_1697679c-5f47-47dc-b862-a3d00a2710c9.jpg?v=1561749706',
            title: 'Varmilo Sakura',
            description: 'A masterpiece mechanical keyboard made from the highest quality materials.',
            price: 119
            }),
            new Product ({
                imagePath: 'https://mechanicalkeyboards.com/shop/images/products/large_VA87M2WLLPn2W_main.jpg',
                title: 'Varmilo Moonlight',
                description: 'A masterpiece mechanical keyboard made from the highest quality materials.',
                price: 159
            }),
            new Product ({
                imagePath: 'https://mechanicalkeyboards.com/shop/images/products/large_VA108ML2WLLPaNDu_2.jpg',
                title: 'Varmilo Panda',
                description: 'A masterpiece mechanical keyboard made from the highest quality materials.',
                price: 89
            }),
            new Product ({
                imagePath: 'https://mechanicalkeyboards.com/shop/images/products/large_VA108M2NWR2BnGJv_4.jpg',
                title: 'Varmilo Koi',
                description: 'A masterpiece mechanical keyboard made from the highest quality materials.',
                price: 189
            })
];

var done = 0;
for (var i=0; i<products.length; i++)
{
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}