const userModel = require('../models/Usuariomodel');
const { hashPassword } = require('../database/tablas/usuarios');

// Controlador para el registro de usuarios
const registroUsuario = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        console.log('Datos del usuario:', nombre, email, password); // Verifica los datos del usuario

        if (!nombre || !email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        // Hash de la contraseña
        const passwordHash = await hashPassword(password);
        console.log('Contraseña hasheada:', passwordHash); // Verifica la contraseña hasheada

        // Llama a la función del modelo para registrar el usuario
        const result = await userModel.registrarUsuario(nombre, email, passwordHash);
        console.log('Resultado del registro:', result); // Verifica el resultado del registro

        if (result) {
            return res.redirect('/login');
        } else {
            req.session.error = 'Ya hay un usuario registrado con ese email';
            return res.redirect('/registro');
        }
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        req.session.error = 'Error interno del servidor';
        return res.redirect('/registro');
    }
};

// Controlador para mostrar el formulario de registro
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
