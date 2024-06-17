const database= require('../database/models')
const products = database.Product
const op = database.Sequelize.Op


let productosController = {

    detalle: function (req, res) {
        let id = req.params.id
       
        products.findByPk(id,{
            include: [
                {association: 'usuario'},
                {association: 'comentario', include:[{
                    association:'usuario'
                }]}
            ]
        })
            .then(function (cafe) {
                console.log('CAFEEE:', JSON.stringify( cafe,null,4));
                res.render('productos', { listado: cafe })
            })
            .catch(function (e) {
                console.log(e);
            })

    },
    
    productAdd : function(req, res) {
        res.render('productAdd' , {listado:db});
      },
    
    searchResults : function (req, res) {
            let busqueda = req.query.search;
            // console.log("busqueda", busqueda);
            products.findAll({
                include: [
                    { association: 'usuario' },
                    { association: 'comentario' }
                ],
                where: {
                    [op.or]: [
                        {
                            nombre_producto: {
                                [op.like]: `%${busqueda}%`
                            }
                        },
                        {
                            descripcion: {
                                [op.like]: `%${busqueda}%`
                            }
                        }
                    ]
                },
                order:[
                    ['created_at', 'DESC']
                ]
            })
                .then(function (data) {
                    console.log("DATA:", JSON.stringify( data[0],null,4))
                    res.render('searchResults', { listado: data });
    
                })
                .catch(function (e) {
                    console.log(e);
                })
      },

    }


module.exports = productosController;