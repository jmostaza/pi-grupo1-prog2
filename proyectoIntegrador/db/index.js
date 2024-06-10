let db ={
    usuario:{
        email:'carmensendoya@gmail.com',
        usuario: 'carmen-sendoya',
        contraseña:'sanandres',
        fechaDeNacimiento:'22/2/2002',
        DNI: 4600000,
        fotoDePerfil: '/images/images.jpeg'
    }, 
    productos:[
        {nombre: 'Half Caff Blend',
        id:1,
        descripcion: 'Una mezcla más relajada y con media cafeína para cuando simplemente quieres tomártelo con calma. Un tueste suave, dulce y equilibrado con notas cálidas de almendras tostadas, chocolate semidulce, caramelo de caramelo y pasas.',
        imagen: '/images/cafe-n1.WEBP',
        infusion: 'cafe',
        precio: '$18000',
        comentarios:[
            {nombreUsuario: ' Maria',
            textoComentario:'Este café superó todas mis expectativas. No puedo dejar de elogiar su sabor y calidad. Recomiendo encarecidamente este estilo de café a todos.',
            imagenPerfil: '/images/icono-usuario-1.jpeg'},
            {nombreUsuario: 'Carmen',
            textoComentario:'Si estás buscando el mejor café que hayas probado, ¡has encontrado tu elección! Este estilo de café es simplemente insuperable. ¡Recomiendo 100%!',
            imagenPerfil: '/images/foto-icono-2.jpeg'},
            {nombreUsuario: 'Julieta',
            textoComentario:'Este café es una verdadera obra maestra. Desde el primer sorbo supe que era algo especial. Recomiendo este estilo de café a todos los amantes del buen café',
            imagenPerfil: '/images/foto-icono-4.jpeg'}
             ]
        },
        {nombre: 'Espresso Blend',
        id:2,
            descripcion: 'No se necesita máquina de espresso para el americano perfecto. Con notas de chocolate amargo y caramelo dulce, esta mezcla de espresso es perfecta para cualquier ocasión.',
            imagen: '/images/cafe-n2.WEBP',
            infusion: 'cafe',
            precio: '$20000',
            comentarios:[
                {nombreUsuario: 'Mailen',
                textoComentario:'Probé este estilo de café por recomendación de un amigo y no me decepcionó en absoluto. Es realmente delicioso y lo recomendaría a cualquiera que busque un buen café.',
                imagenPerfil: '/images/foto-icono-5.jpeg'},
                {nombreUsuario: 'Luis',
                textoComentario:'Después de probar este café, me pregunto por qué no lo probé antes. Es increíblemente delicioso y definitivamente lo recomendaría a todos mis conocidos.',
                imagenPerfil: '/images/foto-icono-3.jpeg'},
                {nombreUsuario: 'Maria',
                textoComentario:'¡Qué café tan increíble! Probé este estilo de café por primera vez y quedé gratamente sorprendido. Definitivamente lo recomendaría a cualquiera que busque una experiencia de café excepcional',
                imagenPerfil: '/images/icono-usuario-1.jpeg'}
            ]
        },
        {nombre: 'Early Bird Blend',
        id:3,
            descripcion: 'Este es para los madrugadores. Este tueste ligero es crujiente, brillante y complejo, con notas de manzana verde, cítricos, caramelo dulce y chocolate con leche cremoso. Es muy probable que te haga más productivo, o lo que sea.',
            imagen: '/images/cafe-n3.WEBP',
            infusion: 'cafe',
            precio: '$18000',
            comentarios:[
                {nombreUsuario: 'Julieta',
                textoComentario:'Este café es simplemente divino. No puedo dejar de alabar su sabor y calidad. Lo recomendaría a cualquier amante del buen café.',
                imagenPerfil: '/images/foto-icono-4.jpeg'},
                {nombreUsuario: 'Mailen',
                textoComentario:' Después de probar este estilo de café, estoy completamente impresionado. Es el mejor que he probado hasta ahora y lo recomendaría sin dudarlo.',
                imagenPerfil: '/images/foto-icono-5.jpeg'},
                {nombreUsuario: 'Carmen',
                textoComentario:'Este café me dejó boquiabierto desde el primer sorbo. Es verdaderamente excepcional y lo recomendaría a todos mis amigos y familiares.',
                imagenPerfil: '/images/foto-icono-2.jpeg'}
            ]
        },
        {nombre: 'Vanilla Blend',
        id:4,
            descripcion: 'Esta infusión de tueste medio es ligera, deliciosa y de ensueño, con toques de vainilla de Madagascar y nueces tostadas.',
            imagen: '/images/cafe-n4-.WEBP',
            infusion: 'cafe',
            precio: '$18000',
            comentarios:[
                {nombreUsuario: 'Maria',
                textoComentario:'¡Qué experiencia tan maravillosa! Este estilo de café es simplemente incomparable. Recomiendo encarecidamente este café a todos los amantes del buen café.',
                imagenPerfil: '/images/icono-usuario-1.jpeg'},
                {nombreUsuario: 'Luis',
                textoComentario:'Probé este café por pura curiosidad y ahora no puedo dejar de recomendarlo. Es verdaderamente delicioso y lo recomendaría a cualquiera que busque un buen café.',
                imagenPerfil: '/images/foto-icono-3.jpeg'},
                {nombreUsuario: 'Carmen',
                textoComentario:'Este café es una verdadera joya. Desde el primer sorbo, supe que era algo especial. Recomiendo este estilo de café a todos los que aprecian un buen café.',
                imagenPerfil: '/images/foto-icono-2.jpeg'}
            ]
        },
        {nombre: 'Social Dog Blend',
        id:5,
        descripcion: '¡Es hora de darse un capricho! Este es el tipo de bebida hecha para compartir. Con mucho cuerpo, complejo y suave con notas de chocolate con leche, maní tostado, azúcar moreno y un final de galleta Graham. Va bien con los chismes...',
        imagen: '/images/cafe-n5.WEBP',
        infusion: 'cafe',
        precio: '$18000',
        comentarios:[
            {nombreUsuario: 'Juieta',
            textoComentario:'Después de probar este café, estoy completamente impresionado. Es el mejor que he probado hasta ahora y lo recomendaría sin dudarlo',
            imagenPerfil: '/images/foto-icono-4.jpeg'},
            {nombreUsuario: 'Luis',
            textoComentario:'Este café me dejó sin palabras. Es simplemente delicioso y lo recomendaría a todos mis amigos y familiares.',
            imagenPerfil: '/images/foto-icono-3.jpeg'},
            {nombreUsuario: 'Maria',
            textoComentario:'¡Qué descubrimiento tan maravilloso! Este estilo de café es una verdadera joya. Lo recomendaría a cualquiera que busque una experiencia de café excepcional.',
            imagenPerfil: '/images/icono-usuario-1.jpeg'}
            ]
        },
        {nombre: 'Decaf Blend',
        id:6,
        descripcion: 'La mezcla descafeinada es para aquellos que quieren un café sin energía. Disfruta de esta mezcla antes de dormir sin interrumpir tu horario de sueño… ¡Ahora puedes tomar café todo el día!',
        imagen: '/images/cafe-n6.WEBP',
        infusion: 'cafe',
        precio: '$20000',
        comentarios:[
            {nombreUsuario: 'Maria',
            textoComentario:'Probé un nuevo estilo de café hoy y me dejó impresionado. Es el más rico que he probado hasta ahora. ¡Recomiendo 100%!',
            imagenPerfil: '/images/icono-usuario-1.jpeg'},
            {nombreUsuario: 'Carmen',
            textoComentario:'Descubrí un estilo de café totalmente diferente y quedé enamorado al primer sorbo. Definitivamente lo recomendaría a todos los amantes del café.',
            imagenPerfil: '/images/foto-icono-2.jpeg'},
            {nombreUsuario: 'Mailen',
            textoComentario:'Me aventuré a probar un café fuera de mi zona de confort y fue una grata sorpresa. Este estilo de café se ha convertido en mi nuevo favorito. ¡Recomendado al 100%!',
            imagenPerfil: '/images/foto-icono-5.jpegg'}
            ]
        },
        {nombre: 'Night Owl Blend',
        id:7,
        descripcion: 'Con esta mezcla, la noche es siempre joven. Rico y aterciopelado, tostado y cremoso con notas de chocolate amargo, miel dulce y nueces tostadas.',
        imagen: '/images/cafe-n7.WEBP',
        infusion: 'cafe',
        precio: '$18000',
        comentarios:[
            {nombreUsuario: 'Luis',
            textoComentario:'Después de probar varios estilos de café, finalmente encontré uno que se destaca. Es increíblemente delicioso y lo recomendaría sin dudarlo.',
            imagenPerfil: '/images/foto-icono-3.jpeg'},
            {nombreUsuario: 'Julieta',
            textoComentario:'Este nuevo estilo de café que probé es simplemente excepcional. No puedo dejar de pensar en lo delicioso que era. ¡Definitivamente lo recomendaría a todos!',
            imagenPerfil: '/images/foto-icono-4.jpeg'},
            {nombreUsuario: 'Carmen',
            textoComentario:'Me animé a probar un café diferente y fue una experiencia increíble. Este estilo de café superó todas mis expectativas. ¡Lo recomendaría sin reservas!',
            imagenPerfil: '/images/foto-icono-2.jpeg'}
            ]
        },
        {nombre: 'Cake Batter Blend',
        id:8,
        descripcion: 'Con notas de pastel de cumpleaños y glaseado de crema de vainilla, nuestra mezcla de masa para pastel hace que cada taza sepa a fiesta.',
        imagen: '/images/cafe-n8.WEBP',
        infusion: 'cafe',
        precio: '$18000',
        comentarios:[
            {nombreUsuario: 'Mailen',
            textoComentario:'Nunca pensé que me gustaría tanto un nuevo café. Fue una revelación y ahora no puedo dejar de recomendarlo a todo el mundo. ¡Es simplemente delicioso!',
            imagenPerfil: '/images/foto-icono-5.jpeg'},
            {nombreUsuario: 'Julieta',
            textoComentario:'Definitivamente el mejor que he tenido hasta ahora. Lo recomendaría a cualquiera que busque una experiencia de café excepcional.',
            imagenPerfil: '/images/foto-icono-4.jpeg'},
            {nombreUsuario: 'Maria',
            textoComentario:'Después de probar este café, no puedo imaginar mi vida sin él. Es absolutamente delicioso y lo recomendaría a cualquier amante del café.',
            imagenPerfil: '/images/icono-usuario-1.jpeg'}
            ]
        },
        {nombre: 'Matcha Green Tea',
        id:9,
        descripcion: 'Nuestro Matcha es un producto vegetal puro elaborado con té verde ceremonial de grado A, 100 % japonés, que es suave y delicioso. Tiene un hermoso sabor terroso con un color verde vibrante que resulta del alto nivel de clorofila en las hojas. Es vegano, sin gluten, con cafeína y lleno de antioxidantes...',
        imagen: '/images/cafe-n9.WEBP',
        infusion: 'matcha',
        precio: '$25000',
        comentarios:[
            {nombreUsuario: 'Mailen',
            textoComentario:'Quedé impresionada por su sabor y calidad. Recomiendo a todos los que buscan una experiencia verdaderamente memorable.',
            imagenPerfil: '/images/foto-icono-5.jpeg'},
            {nombreUsuario: 'Carmen',
            textoComentario:'No puedo creer lo increíble que fue mi experiencia con este café. Definitivamente es el más rico que he probado hasta ahora. ¡Recomiendo 100%!',
            imagenPerfil: '/images/foto-icono-2.jpeg'},
            {nombreUsuario: 'Luis',
            textoComentario:'Simplemente excepcional. Lo probé por primera vez y me dejó sin palabras. Recomiendo este café a todos mis amigos y familiares.',
            imagenPerfil: '/images/foto-icono-3.jpeg'}
            ]
        },
        {nombre: 'Vanilla Matcha Tea',
        id:10,
        descripcion: 'Nuestro Vanilla Matcha es un producto vegetal puro elaborado con té verde ceremonial de grado A, 100% japonés, que tiene notas de vainilla de Madagascar, combinadas maravillosamente con el sabor terroso del matcha.',
        imagen: '/images/cafe-n10.WEBP',
        infusion: 'matcha',
        precio: '$25000',
        comentarios:[
            {nombreUsuario: 'Julieta',
            textoComentario:'He probado muchos tipos de café, pero este estilo en particular me dejó impresionado. No puedo dejar de recomendarlo a todos los que conozco.',
            imagenPerfil: '/images/foto-icono-4.jpeg'},
            {nombreUsuario: 'Mailen',
            textoComentario:'Después de probar este café, estoy segura de que no volveré a mirar hacia atrás. Es el mejor que he probado y lo recomendaría sin dudarlo.',
            imagenPerfil: '/images/foto-icono-5.jpeg'},
            {nombreUsuario: 'Carmen',
            textoComentario:'¡Qué descubrimiento tan maravilloso! Este café es una verdadera joya. Lo recomendaría a cualquiera que busque una experiencia de café excepcional.',
            imagenPerfil: '/images/foto-icono-2.jpeg'}
            ]
        }
    ]

}

module.exports= db