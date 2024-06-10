module.exports = function (sequelize, datatypes) {
    let alias = "Product";
    let cols = {
        id:{
            autoIncremente: true,
            primaryKey: true,
            type: datatypes.INTEGER
        },
        foto:{
            type: datatypes.STRING
        },
        nombre_producto:{
            type: datatypes.STRING
        },
        descripcion:{
            type: datatypes.INTEGER
        },
        id_usuario: {
            type: datatypes.INTEGER
        }
    }
    let config={
        tableName:"producto",
        timestamp: true,
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    }
    
    let Product = sequelize.define(alias,cols,config); // creo una variable, no es el alias 
    
    Product.associate = function (models) {
        
        Product.belongsTo(models.User, {
            as: "usuario", //asi vamos a llamar a la relación en los controladores
            foreignKey: "id_usuario", 
        })
            
        Product.hasMany(models.Comment, {
            as:"comentario", 
            foreignKey: "id_producto"
        })
    }
    
    return Product;
    }