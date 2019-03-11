var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SportS99!",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.error("error connection " + err.stack);
        return;
    }
    console.log("id connection " + connection.threadId);
});

module.exports = connection;