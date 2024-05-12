const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Ruta para mostrar el formulario de registro
router.get('/', userController.getForm);

// Ruta para manejar la solicitud de registro
router.post('/', userController.registroUsuario);

module.exports = router;
