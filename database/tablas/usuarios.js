const {getConexion}=require('../conexion');

//aqui se hace la funcion para insertar un nuevo usuario en la bd
async function registroUser(nombre, email, passwordHash){
    const conexion=await getConexion();
    try{
        await conexion.query('INSERT INTO usuarios (nombre, email, password_hash) VALUES (?,?,?)',[nombre, email, passwordHash]);
        console.log('Usuario registrado con exito');
    }catch(error){
        console.error('Error al registrarse: ', error);
        throw error;
    }finally{
        conexion.release();
    }
}
async function getUserPorNombre(nombre){
    const conexion=await getConexion();
    try{
        const[results]=await conexion.query('SELECT * FROM usuarios WHERE nombre=?', [nombre]);
        return results[0];
    }catch (error){
        console.error('Error al obtener el usuario por nombre:', error);
        throw error;
    }finally {//aqui se libera la conexion cuando finaliza
        conexion.release();
    }
}
async function getId(id) {
    const conexion = await getConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}
module.exports={
    registroUser,
    getUserPorNombre,
    getId
};