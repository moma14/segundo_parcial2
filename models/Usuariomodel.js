const registroUsuario = require('../database/conexion');

const registroUser = async (nombre, email, passwordHash, passwordHash ) => {
    
    // aqui se llama la funcion para registrar al usuario en la bd
    try {
        const result = await registroUsuario.registroUser(nombre, email, passwordHash, passwordHash);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = { registroUser };