function cesarCipher(texto, shift) {
    const alphabet = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        let index = alphabet.indexOf(char);

        if (index !== -1) {
            let newIndex = (index + shift) % alphabet.length;
            resultado += alphabet[newIndex];
        } else {
            resultado += char;
        }
    }

    return resultado;
}

function base64Cipher(texto) {
    return Buffer.from(texto).toString('base64');
}

function substitutionCipher(texto, clave) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZÑñ';
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        let index = alphabet.indexOf(char);

        if (index !== -1) {
            let keyChar = clave[index % clave.length];
            resultado += keyChar;
        } else {
            resultado += char;
        }
    }

    return resultado;
}

module.exports = { cesarCipher, base64Cipher, substitutionCipher };
