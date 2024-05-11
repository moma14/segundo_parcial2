const userModel = require('../models/Usuariomodel');
const { hashPass } = require('../database/conexion');

//este controlador servira para poder manejar el registro de usuarios
const registroUsuario = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        if (!nombre || !email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
         // este if va a verificar si todos los campos requeridos realmente están
        const passwordHash = await hashPass(password);
        //aqui se llama a la función del modelo para registrar el usuario
        const result = await userModel.registroUsuario(nombre, email, passwordHash, passwordHash);

        if (result) {
            return res.redirect('/login');
        } else {
             req.session.error = 'Ya hay un usuario registrado con ese email';
             return res.redirect('/registro');
        }
        //aqui hay dos posibilidades si el usuario se registra correctamente lo redirige al login
        // de lo contrario le tira un error
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        req.session.error = 'Error interno del servidor';
        return res.redirect('/registro');
    }
};
// este controlador va a servir pero para el registro del usuario
const getForm = (req, res) => {
    try {
        const error = req.session.error;
        delete req.session.error;
        res.render('registro', { error });
    } catch (error) {
        console.error('Error al mostrar el formulario de registro:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = { registroUsuario, getForm };
