const express =require('express');
const router = express.Router();


router.get('/', (req, res)=> {
    res.render('registro', { tittle: 'Registrarse'});
});


module.exports=router;