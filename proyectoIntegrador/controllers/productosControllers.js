const db = require ('../db/index')

let productosControllers = {
    index : function(req, res) {
        res.send(db);
      },
    productos: function(req,res){
        let cafes=[]
        for (let i = 0; i < db.productos.length; i++) {
           cafes.push(db.productos[i]);
        }
        res.send(cafes)
    },
    cafes: function(req,res){
        let tipo=[]
        for (let i = 0; i < db.productos.length; i++) {
           if('cafe' == db.productos[i].infusion){
            tipo.push(db.productos[i])
           }
        }
        res.send(tipo)
    },
    matcha : function(req,res){
        let tipo=[]
        for (let i = 0; i < db.productos.length; i++) {
           if('matcha' == db.productos[i].infusion){
            tipo.push(db.productos[i])
           }
        }
        res.send(tipo)
    },
    detalle: function(req,res){
        let id= req.params.id
        let cafe
        for (let i = 0; i < db.productos.length; i++) {
           if(id== db.productos[i].id){
            cafe= db.productos[i]
           }
        }
        res.send(cafe)
    }
}

module.exports = productosControllers;