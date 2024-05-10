const express= require("express")
const router=  express.Router(); 
const crypto = require('crypto');

function cesarCipher(text, shift) {
    return text.replace(/[a-zA-Z]/g, function(char) {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            code = ((code - 65 + shift) % 26) + 65;
        } else if (code >= 97 && code <= 122) {
            code = ((code - 97 + shift) % 26) + 97;
        }
        return String.fromCharCode(code);
    });
}