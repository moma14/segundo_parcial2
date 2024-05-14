const express = require('express');
const router = express.Router();
const userModel = require('../database/tablas/usuarios');

router.get('/', (req, res) => {
    res.render('login', { title: 'Iniciar sesión' });
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;
//primero busca a los usuarios en la bd
    try {
        const user = await userModel.getUserPorEmail(email);
 // Si no se encuentra el usuario, mostrar mensaje de error
        if (!user) {
            return res.render('login', { title: 'Iniciar sesión', error: 'Credenciales incorrectas' });
        }

        // aqui se Verifica si la contraseña proporcionada coincide con la contraseña almacenada
        const passwordMatch = await userModel.comparePassword(password, user.password_hash);

        // Si la contraseña no coincide, se muestra un mensaje de error
        if (!passwordMatch) {
            return res.render('login', { title: 'Iniciar sesión', error: 'Credenciales incorrectas' });
        }

        req.session.userId = user.id;

        // se redirige al usuario a la página  principal
        res.redirect('/');
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).render('error', { title: 'Error interno del servidor' });
    }
});

module.exports = router;
