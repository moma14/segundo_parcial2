const cifrados=require('../models/cipherModel');

async function textoCifrado(req, res){
    console.log("Solicitud recibida");
    console.log("Texto recibido", req.body);

    const textOrigin=req.body['cifrador-texto'];
    const pross=req.body['opcion'];
    let textCipher;

    console.log("Texto para cifrar:", textOrigin);
    console.log("Texto Cifrado", pross);
    
//aqui se manejan la funcionalidad cuando el usuario elija la clave de cifrado que desea
    switch (pross) { 
        case 'cesar':
            const keyCesar = parseInt(req.body['keyCipher']); 
            console.log("Cifrando texto utilizando el algoritmo César...");
            textCipher = cesarCipher(textoOrigin, keyCesar);
            break;
        case 'sustitucion':
            console.log("Cifrando texto utilizando la sustitución de Polibio...");
            textCipher = substitutionCipher(textoOrigin);
            break;
        case 'base64':
            console.log("Cifrando texto utilizando el algoritmo Base64...");
            textCipher = cifrarBase64(textoOriginal);
            break;
        default:
            console.error("Algoritmo de cifrado no válido:", algoritmo);
            return res.status(400).send('Algoritmo de cifrado no válido');
    }

    console.log("EL texto esta cifrado: ", textoCifrado);
}
module.exports={
    textoCifrado
};
