const express = require('express');
//creo uns instancia del sistema de ruteo de express
const router = express.Router();


const homeController = require('../controller/homeController');

router.get('/', (req, res) => {
    const products = homeController.leerTodos();

    res.render('home', { products })
});


module.exports = router;