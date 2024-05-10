const express=require('express');
const router=express.Router();

const index=require('./index');
const login=require('./login');
const registrarUsuario=require('./registro-usuario');

router.use('/',index);
router.use('/login',login);
router.use('/login',registrarUsuario);



module.exports=router;


