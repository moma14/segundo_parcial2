const express= require("express")
const router=  express.Router(); 
const crypto = require('crypto');

function hexCipher(text) {
    return Buffer.from(text).toString('hex');
}