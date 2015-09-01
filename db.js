/*
 * Database Model and Other Operations
 * Team pclubGU
 * The MIT License
 */
var m = require('mysql'),
    conf = require('./config'),
    usePooling = false;

var pool = m.createPool({
        host: 'localhost',
        user: 'root',
        password: 'akhil',
});

module.exports.login = function(opt) {
        pool.getConnection(function(err, conn) {
                queryString='select * from students where (email="+opt.email+"or username="+opt.username+")password="+opt.password'
                conn.query(queryString, function(err, rows) {
                        conn.close();
                });
        });
}

module.exports.deleteAccount = function(opt) {
        pool.getConnection(function(err, conn) {
		queryString='delete * from students where email='+opt.email;
                conn.query(queryString, function(err, rows) {
                        conn.close();
                });
        });
}

module.exports.forgotPassword = function(opt) {
        pool.getConnection(function(err, conn) {
                queryString='select password from students where email='opt.email;
                conn.query(queryString, function(err, rows) {
                        conn.close();
                });
        });
}






