const db = require ('../db/index')

let indexController = {
    index : function(req, res) {
        res.render('index' , {listado:db});
      }
  
   
}

module.exports= indexController;