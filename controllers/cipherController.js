const cipherModel = require('../models/cipherModel');
const express = require('express');

const router = express.Router();

const cipherController = {
  async cesarCipher(req, res) {
    const { texto, shift } = req.body;
    const encryptedText = cipherModel.cesarCipher(texto, shift);
    res.send({ encryptedText });
  },

  async base64Cipher(req, res) {
    const { texto } = req.body;
    const encryptedText = cipherModel.base64Cipher(texto);
    res.send({ encryptedText });
  },

  async substitutionCipher(req, res) {
    const { texto, clave } = req.body;
    const encryptedText = cipherModel.substitutionCipher(texto, clave);
    res.send({ encryptedText });
  }
};

module.exports = cipherController;
