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
      }
}

module.exports = productosController;