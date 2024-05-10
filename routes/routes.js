const express=require('express');
const router=express.Router();

const index=require('./index');
const login=require('./login');

router.use('/',index);
router.use('/login',login);


module.exports=router;


