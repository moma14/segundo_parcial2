const express = require('express');
const usuarios=require('../database/tablas/usuarios');
const router = express.Router();

// aqui se manejan las rutas para el registro de usuarios
router.post('/', async (req, res) => {
    const { nombre, email, password, confirmPassword } = req.body;

    // Verificar si la contraseña y su confirmación coinciden
    if (password !== confirmPassword) {
        return res.status(400).send('Las contraseñas no coinciden');
    }

    try {
        // primero se verifica si el usuario esta registrado
        const userExistent = await usuarios.getUserPorNombre(nombre);
        if (userExistent) {
            return res.status(400).send('El usuario ya está registrado');
        }

        // Hash de la contraseña
        const hashedPassword = await authMiddleWare.getHash(password);

        // Registrar el usuario en la base de datos
        await conexion.registrar(nombre, email, hashedPassword);

        // Usuario insertado correctamente
        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
