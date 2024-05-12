const express = require('express');
const router = express.Router();
const userModel = require('../database/tablas/usuarios');

router.get('/', (req, res) => {
    res.render('login', { title: 'Iniciar sesión' });
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar al usuario en la base de datos por su correo electrónico
        const user = await userModel.getUserPorEmail(email);

        if (!user) {
            // Si no se encuentra el usuario, mostrar mensaje de error
            return res.render('login', { title: 'Iniciar sesión', error: 'Credenciales incorrectas' });
        }

        // Verificar si la contraseña proporcionada coincide con la contraseña almacenada
        const passwordMatch = await userModel.comparePassword(password, user.password_hash);

        if (!passwordMatch) {
            // Si la contraseña no coincide, mostrar mensaje de error
            return res.render('login', { title: 'Iniciar sesión', error: 'Credenciales incorrectas' });
        }

        // Si las credenciales son válidas, establecer una sesión para el usuario
        req.session.userId = user.id;

        // Redirigir al usuario a la página  principal
        res.redirect('/');
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).render('error', { title: 'Error interno del servidor' });
    }
});

module.exports = router;
