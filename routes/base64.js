const express= require("express")
const router=  express.Router();
const crypto = require('crypto');

function base64Cipher(text) {
    return Buffer.from(text).toString('base64');
}