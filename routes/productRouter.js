const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

//Lista de productos
router.get('/',  productController.lista )

router.get('/create', (req, res) => {
    res.render('product.ejs');
})

//Detalle del producto 
router.get('/:id', productController.view )


router.post('/', (req, res) => {
    res.send("Recibe datos de formulario")
})

//Detalle del producto para edición
router.get('/edit/:id',  productController.detalle )

// Guarda los datos editados del producto
router.put('/:id', productController.edit);

router.delete('/:id', (req, res) => {
    res.send("Borra producto")
})


module.exports = router;
