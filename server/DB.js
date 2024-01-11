const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'sql.freedb.tech', //실제로 연결할 데이터베이스의 위치
    user: 'freedb_studiomoona',
    password: 'QKpN6yAFvA#x#aP',
    database: 'freedb_studiomoona', //데이터베이스 이름
    connectionLimit: 500,
    waitForConnections: true,
    dateStrings: 'date',
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
