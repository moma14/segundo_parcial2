const resultado = require('../models/cesarModel');


async function cifrador(req, res) {
    const { textoOriginal, clave } = req.body;
    console.log('Datos del cuerpo de la solicitud:', req.body);
    console.log('Clave recibida:', clave);

    
    if (!textoOriginal) {
        console.log('No se registró ningún dato en la base de datos');
        return res.redirect(`/index?textoEncrypt=${encodeURIComponent(textoEncrypt)}`);
    }

    if (isNaN(clave)) {
        return res.status(400).send("La clave no es un número válido");
    }

    
    const textoEncrypt = cifrador(textoOriginal, parseInt(clave));
    
    try {
        await resultado.create(textoOriginal, textoEncrypt, parseInt(clave));

        res.redirect(`/index?textoEncrypt=${encodeURIComponent(textoEncrypt)}`);
    } catch (error) {
        console.error('Error al cifrar y almacenar el texto:', error);
        res.status(500).send(error.message);
    }
}

function cifrador(textoOriginal, clave) {
    const alfabeto = 'abcdefghijklmnñopqrstuvwxyz'; 
    
    textoOriginal = textoOriginal.toLowerCase();

    clave = parseInt(clave);

    let textoEncrypt = '';

    for (let i = 0; i < textoEncrypt.length; i++) {
        const simbol = textoEncrypt[i];
        const indice = alfabeto.indexOf(simbol); 
        if (indice === -1) {
            textoEncrypt += simbol;
        } else {

            let nuevoIndice = (indice + clave) % alfabeto.length; 
        
            if (nuevoIndice < 0) {
                nuevoIndice += alfabeto.length;
            }
            const simbolCifrado = alfabeto[nuevoIndice];

            textoEncrypt += simbolCifrado;
        }
    }

    return textoEncrypt;
}


module.exports = {
  cifrador
};
  