const {getConexion}=require('../conexion');

//aqui se hace la funcion para insertar un nuevo usuario en la bd
async function registrar(nombre, email, password){
    const conexion=await getConexion();
    try{
        await conexion.query('INSERT INTO usuarios (nombre, email, password_hash) VALUES (?,?,?)',[nombre, email, password]);
        console.log('Usuario registrado con exito');
    }catch(error){
        console.error('Error al registrarse: ', error);
        throw error;
    }finally{
        conexion.release();
    }
}
module.exports={
    registrar
};