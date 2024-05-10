const mysql2 = require('mysql2/promise');
const dotenv = require('dotenv');

// se configura el dotenv
dotenv.config();

// Aqui se crea la conexion en mysql
const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

function getConexion(){
    return pool.promise().getConnection();
}
module.exports={
    getConexion
};


