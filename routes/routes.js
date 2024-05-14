const express=require('express');
const router=express.Router();
const cipherController=require('../controllers/cipherController');

const index=require('./index');
const login=require('./login');
const registro=require('./registro');
const resultado=require('./resultado');

router.use('/',index);
router.use('/login',login);
router.use('/registro',registro);
router.use('/resultado',resultado);

module.exports=router;


