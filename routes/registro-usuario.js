const express = require('express');
const userController=require('../controllers/userController');
const router = express.Router();

// aqui esta la ruta para mostrar el formulario de registro
router.get('/', userController.getForm);

// y aqui esta la ruta para manejar la solicitud de registro 
router.post('/', userController.registroUsuario);

module.exports = router;

module.exports = router;
