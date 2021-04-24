let visitados = require('../data/datosProductos');


let productModel1 = {

    getProductList: () => {
        return visitados;
    },
    getProductDetail: (id) => {
        const response = visitados.find( visitado => visitado.id == id);
        return response ? response : {};
    },
    editProduct:(p) => {
        let product = visitados.find( visitado => visitado.id == p.id);

        product.name= p.name,
        product.descuento= p.descuento,
        product.price= p.price
        // product.image= p.image
}
    

}

module.exports = productModel1;