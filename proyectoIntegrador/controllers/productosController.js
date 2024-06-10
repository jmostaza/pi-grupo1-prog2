const db = require ('../db/index')
const database= require('../database/models')

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
      },
    
    searchResults : function(req, res) {
        
        let buscar = []
        let busqueda = req.query.search;
            // return res.send (busqueda)
        for (let i = 0; i < db.productos.length; i++) {
            console.log(db.productos[i].nombre);
            if (busqueda== db.productos[i].nombre){
                buscar.push (db.productos[i])
            }
            
        }
        res.render('searchResults' , {listado:buscar});
      },
//       prueba: function(req,res){
//         database.Product.findAll()
//         .then(function(data){
//           console.log('datos de producto:', JSON.stringify(data, null, 4));
//           res.send(data)
//         })
//         .catch(function(e){
//           console.log(e);
//         })
// }
}

module.exports = productosController;