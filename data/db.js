const mysql = require('mysql2');

// creiamo l'oggetto di connessione
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog_db'
});

// connettiamoci
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});
module.exports = connection;