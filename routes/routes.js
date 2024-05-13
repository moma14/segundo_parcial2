const express=require('express');
const router=express.Router();
const cipherController=require('../controllers/ciphersControllers');

const index=require('./index');
const login=require('./login');
const registro=require('./registro');
 

router.use('/',index);
router.use('/login',login);
router.use('/registro',registro);


router.post('/cifrador-texto',cipherController.cifrador);

module.exports=router;


