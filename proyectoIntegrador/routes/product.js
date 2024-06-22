let express= require('express');
let router= express.Router()
let productosController = require ('../controllers/productosController');
const productAddValidations = require ("../middlewares/product-add-validator");
const commentValidations = require ("../middlewares/comment-add-validator");
const productEditValidations= require("../middlewares/product-add-validator")


router.get('/detalle/:id', productosController.detalle);
router.get('/productAdd', productosController.create);
router.get('/searchResults' , productosController.searchResults);
router.get('/productEdit/:id', productosController.showProductEdit);


router.post('/store', productAddValidations, productosController.store);
router.post('/detalle/:id', commentValidations, productosController.addComment); 
router.post("/update/:id", productEditValidations, productosController.updateProduct)
router.post('/delete/:id', productosController.delete)


module.exports= router;