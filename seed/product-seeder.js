var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game1',
        description: 'Awesome Game !!!',
        price: 100
    }),
               new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/IPhone_6S_Rose_Gold.png',
        title: 'Iphone 6s',
        description: 'Awesome Mobile !!!',
        price: 555
    }),
               new Product({
        imagePath: 'http://image1.superdry.com/static/images/products/upload2125115174503104348.jpg',
        title: 'Formals Shirt',
        description: 'Awesome Shirt !!!',
        price: 25
    }),
               new Product({
        imagePath: 'http://2.imimg.com/data2/JS/IS/MY-1796519/kids-shirts-250x250.jpg',
        title: 'Casual Shirts',
        description: 'Be Cool !!!',
        price: 42
    }),
            new Product({
        imagePath: 'https://images-eu.ssl-images-amazon.com/images/G/31/img15/Shoes/CatNav/p._V293117552_.jpg',
        title: 'Shoes',
        description: 'Be in trend !!!',
        price: 50
    }),
               new Product({
        imagePath: 'http://ecx.images-amazon.com/images/I/51jd+y4OjXL._AC_UL246_SR190,246_.jpg',
        title: 'Watch',
        description: 'Gentelman time keeper !!!',
        price: 210
    })
               ];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, res) {
        done++;
        if (done === products.length) {
            console.log('success');
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}