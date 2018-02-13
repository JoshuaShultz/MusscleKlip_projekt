const mysql = require("mysql2");
module.exports = {
    "connect" : () => {
        return mysql.createConnection({
            host : 'web-eu-1.serenityservers.net',
            user : 'iceshiel_muskel',
            password : 'rts-muskel',
            database : "iceshiel_rts-muskel"
        })
    }
}