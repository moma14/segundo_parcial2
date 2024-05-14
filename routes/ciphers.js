const express= require("express")
const router=  express.Router();
const cifradoController=require('../controllers/cifrarController');

router.get('/',(req, res)=>{
    res.render('/cifrador-texto');
});

router.post('/',(req, res)=>{
    console.log('Datos recibidos /ciphers:' req.body);
    cifradoController
})

module.exports=router;