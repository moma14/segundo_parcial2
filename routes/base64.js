const express= require("express")
const router=  express.Router();

app.post('/resultado', (req, res) => {
    const { texto } = req.body;
    const encryptedText = cipherModel.base64Cipher(texto);
    res.render({ encryptedText });
});

module.exports = router;