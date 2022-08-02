const mysql = require('mysql2')

const connection = mysql.createPool({
    host: 'localhost',
    database: 'class_express',
    user: 'root',
    password: '4321'
})

module.exports = connection