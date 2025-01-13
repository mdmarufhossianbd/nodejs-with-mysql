require('dotenv').config()
const mysql2 = require("mysql2/promise")

const pool = mysql2.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit:10,
    queueLimit:0,
    waitForConnections:true
})

const checkConnection = async() => {
    try {
        const connection = await pool.getConnection();
        console.log('DB is Connected');
        connection.release()
    } catch (error) {
        console.log("Opps!!! faild to connecting with database.");
        throw error;
    }
}

module.exports = {pool, checkConnection};