const mysql = require('mysql');

const db = require('./myconfig.js');

    
//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql connected..');
});

