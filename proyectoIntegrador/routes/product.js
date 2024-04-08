let express= require('express');
let router= express.Router()
let db= require('../db/index');

router.get('/', function(req,res){
    let cafes=[]
    for (let i = 0; i < db.productos.length; i++) {
       cafes.push(db.productos[i]);
    }
    res.send(cafes)
})
router.get('/cafes', function(req,res){
    let tipo=[]
    for (let i = 0; i < db.productos.length; i++) {
       if('cafe' == db.productos[i].infusion){
        tipo.push(db.productos[i])
       }
    }
    res.send(tipo)
})

router.get('/matcha', function(req,res){
    let tipo=[]
    for (let i = 0; i < db.productos.length; i++) {
       if('matcha' == db.productos[i].infusion){
        tipo.push(db.productos[i])
       }
    }
    res.send(tipo)
})
router.get('/detalle/:id', function(req,res){
    let id= req.params.id
    let cafe
    for (let i = 0; i < db.productos.length; i++) {
       if(id== db.productos[i].id){
        cafe= db.productos[i]
       }
    }
    res.send(cafe)
})

module.exports= router