module.exports = function (sequelize,dataTypes) {
    let alias = "Comment"
    let cols = {
        id_comentario:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        texto: {
            type: dataTypes.STRING
        },
        id_usuario:{
            type: dataTypes.INTEGER
        },
        id_producto:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: 'comentario',
        timestamps: true,
        underscored: true,
        createdAt : 'created_at',
        updatedAt : 'updeated_at',
        deleatedAt : 'deleated_at'
    }
    const Comments = sequelize.define(alias,cols,config);
    Comments.associate = function (models) {
        Comments.belongsTo (models.User,{
            as: "usuario",
            foreignKey: 'id_usuario'
        })
        Comments.belongsTo (models.Product,{
            as: "producto",
            foreignKey: 'id_producto'
        })
    }
    return Comments;
}