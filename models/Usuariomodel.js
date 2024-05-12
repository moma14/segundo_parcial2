const { registroUser } = require('../database/tablas/usuarios');

const registrarUsuario = async (nombre, email, passwordHash) => {
    try {
        const result = await registroUser(nombre, email, passwordHash);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = { registrarUsuario };