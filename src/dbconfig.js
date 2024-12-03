const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'bttco8k2bi7it5kexgqo-mysql.services.clever-cloud.com',
    port: 3306,
    user: 'uze1op9fbik38can',
    pasword: 'rd6iS7ycXAFG1NWD4PW1',
    database: 'bttco8k2bi7it5kexgqo'
});

// const db = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     port: process.env.DATABASE_PORT || 3306,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME,
// });

db.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('MySQL conectado');
    }
});

module.exports = db;
