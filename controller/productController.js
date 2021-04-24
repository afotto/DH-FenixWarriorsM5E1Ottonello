// const productModel = require('../models/productModel');
const productModel = require('../models/productModel1');

let productController = {

    detalle: function(req, res){
        // let producto = productos.find(prod => prod.id == req.params.idProduct);
        const product = productModel.getProductDetail(req.params.id)
        res.render( 'editProduct', { 'product': product});
    },

    lista: function(req, res){
        const products = productModel.getProductList();  
        // console.log(products);
        res.render('listProducts', {'products': products} );
        // return products;
    },

    view: function(req, res){
        const product = productModel.getProductDetail(req.params.id)
        res.render( 'viewProduct', { 'product': product});
    },

     edit: function (req, res) {

        console.log('edicion');
        console.log(req.body);

        let product = {
            id: req.params.id,
            name: req.body.name,
            descuento: req.body.descuento,
            price: req.body.price,
            // image: req.body.image
        };

        console.log(product)
        productModel.editProduct(product);
        res.redirect('/');
    }
}

module.exports = productController;
