const express= require("express")
const router=  express.Router();

app.post('/resultado', (req, res) => {
    const { texto, clave } = req.body;
    const encryptedText = cipherModel.substitutionCipher(texto, clave);
    res.render({ encryptedText });
});

module.exports = router;