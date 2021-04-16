let visitados = require('../data/datosProductos');

let homeController = {

    leerTodos: function() {
        return visitados;
    }

}

//para que sea pública la exporto
module.exports = homeController;