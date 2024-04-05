let db ={
    usuario:{
        email:'sanandres',
        usuario: 'carmen',
        contraseña:'ajaa',
        fechaDeNacimiento:'22/2/2222',
        DNI: 4600000,
        fotoDePerfil: 'foto'
    }, 
    productos:[
        {nombre: 'cafe1',
        color:'rojo',
        tipo: 'espresso',
        imagen: 'imagen',
        comentarios:[
            {nombreUsuario: 'carmen',
            textoComentario:'coment',
            imagenPerfil: 'img'},
            {nombreUsuario: 'carmen',
            textoComentario:'coment',
            imagenPerfil: 'img'},
            {nombreUsuario: 'carmen',
            textoComentario:'coment',
            imagenPerfil: 'img'}
        ]
        },

        {nombre: 'cafe2',
        color: 'azul',
        tipo: 'espresso',
        imagen: 'imagen',
        comentarios:[
            {nombreUsuario: 'carmen',
            textoComentario:'coment',
            imagenPerfil: 'img'},
            {nombreUsuario: 'carmen',
            textoComentario:'coment',
            imagenPerfil: 'img'},
            {nombreUsuario: 'carmen',
            textoComentario:'coment',
            imagenPerfil: 'img'}
        ]
        },

        {nombre: 'cafe3',
        color: 'verde',
        tipo: 'espresso',
        imagen: 'imagen',
        comentarios:[
            {nombreUsuario: 'carmen',
            textoComentario:'coment',
            imagenPerfil: 'img'},
            {nombreUsuario: 'carmen',
            textoComentario:'coment',
            imagenPerfil: 'img'},
            {nombreUsuario: 'carmen',
            textoComentario:'coment',
            imagenPerfil: 'img'}
        ]
        }
    ]

}

module.exports= db