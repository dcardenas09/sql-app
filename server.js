var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fundraising_app',
});

var port = 9000;
var express = require('express');

var app = express();
app.get('/transactions', function(req, res) {
    connection.connect();

    connection.query('SELECT * from transactions', function(err, rows) {
        if (!err) {
            console.log('the solution is: ', rows);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(rows));
        } else {
            console.log('Error while performing query.');
        }
    });
});


//connection.end();
app.listen(port);
console.log("Server listening on port " + port);