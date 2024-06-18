const database = require('../database/models')
const products = database.Product;
const op = database.Sequelize.Op;

const { validationResult } = require("express-validator")

let productosController = {

    detalle: function (req, res) {
        let id = req.params.id

        products.findByPk(id, {
            include: [
                { association: 'usuario' },
                {
                    association: 'comentario', include: [{
                        association: 'usuario'
                    }]
                }
            ]
        })
            .then(function (cafe) {
                console.log('CAFEEE:', JSON.stringify(cafe, null, 4));
                res.render('productos', { listado: cafe })
            })
            .catch(function (e) {
                console.log(e);
            })

    },


    searchResults: function (req, res) {
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
            order: [
                ['created_at', 'DESC']
            ]
        })
            .then(function (data) {
                console.log("DATA:", JSON.stringify(data[0], null, 4))
                res.render('searchResults', { listado: data });

            })
            .catch(function (e) {
                console.log(e);
            })
    },

    create: function (req, res) {
        if (!req.session.user) { // si no hay un usuario logueado que me redirija al formulario de logueo
            return res.redirect('/users/login');
        }
        else {
            res.render('productAdd') // si lo hay, que me muestre el formulario para poder agregar un producto
        }
    },

    store: function (req, res) {
        const resultValidation = validationResult(req); // guardamos en una variable lo que trajo el metodo validation result pasandole como parametro el objeto request.

        if (!resultValidation.isEmpty()) { // si no se completaron los campos, que me muestre los mensajes de erorr
            // console.log('ERRORES ; ' , resultValidation);
            return res.render('productAdd', { errores: resultValidation.mapped(), oldData: req.body })
        }
        // en una variable, dentro de un ol, agregamos como propiedad el nombre del campo en la db y como valor, lo que ingresa el usuario
        const product = {
            foto: req.body.foto,
            nombre_producto: req.body.nombre_producto,
            descripcion: req.body.descripcion,
            id_usuario: req.session.user.id
        }
        // usamos el metodo create con la variable que definimos anteriormende que contiene los datos a modificar
        products.create(product)
            .then(function (data) {
                res.redirect('/')
            })
            .catch(function (error) {
                console.log(error);
            })
    }

}


module.exports = productosController;