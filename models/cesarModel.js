const conexion=require('../database/conexion');

    async function create(textoOriginal, textoEncrypt, clave) {
        try{
            await conexion.query('INSERT INTO Ciphers(textoOriginal, textoEncrypt, keyEncrypt) VALUES (?, ?, ?)',[textoOriginal, textoEncrypt, clave]);
            console.log('Texto cifrado con exito y subido a la BD.');
        }catch(error){
            console.log('Error al cifrar el texto, no se pudo subir a la bd: ', error);
            throw error;
        }
    }

module.exports={
    create };