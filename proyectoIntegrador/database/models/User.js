module.exports= function(sequelize, dataTypes){
    let alias= User;
    let cols={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {type: dataTypes.STRING},
        contraseña: {
            type: dataTypes.STRING
        },
        fecha:{
            type: date
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
        }
    }
    let config= {
        tableName: 'users',
        timestamps: true,
        underscores: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'

    }
    let User= sequelize.define(alias, cols, config)
       
    User.associate= function(models){
        User.hasMany(models.Product,{
            as:'producto',
            foreignKey: 'id_usuario'
        })
    }
    User.associate=  function(models){
        User.hasMany(models.Comment,{
            as: 'comentario',
            foreignKey: 'id_usuario'
        })
    }
    
    return User

}