const express= require("express")
const router=  express.Router(); 
const crypto = require('crypto');

function substitutionCipher(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cipherAlphabet = 'zyxwvutsrqponmlkjihgfedcba';
    return text.replace(/[a-zA-Z]/g, function(char) {
        const index = alphabet.indexOf(char.toLowerCase());
        if (index !== -1) {
            return char === char.toUpperCase() ? cipherAlphabet[index].toUpperCase() : cipherAlphabet[index];
        }
        return char;
    });
}