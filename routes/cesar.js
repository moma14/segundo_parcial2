const express= require("express")
const router=  express.Router();

app.post('/resultado', (req, res) => {
    const { texto, shift } = req.body;
    const encryptedText = cipherModel.cesarCipher(texto, shift);
    res.render({ encryptedText });
});

module.exports = router;