const express =require('express');
const router = express.Router();


router.get('/', (req, res)=> {
    res.render('login', { tittle: 'Iniciar sesion'});
});


module.exports=router;

console.log("Hola mundo");


