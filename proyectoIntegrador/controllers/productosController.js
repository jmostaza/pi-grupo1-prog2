const db = require ('../db/index')

let productosController = {

    detalle: function(req,res){
        let id= req.params.id
        let cafe
        for (let i = 0; i < db.productos.length; i++) {
           if(id== db.productos[i].id){
            cafe= db.productos[i]
           }
        }
        res.render('productos' , {listado:cafe})
    },
    productAdd : function(req, res) {
        res.render('productAdd' , {listado:db});
      }
}

module.exports = productosController;