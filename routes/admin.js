/* Require these */
const sql_connection = require("../config/sql.js").connect();
const json_export = require("../services/json_exporter_module/json_export_module.js")
const log_module = require("../services/logging_module/logging_module.js");

module.exports = (server)=>{
    server.get('/produkter', function (req, res) {
        res.render('pages/produkter', {
    
        });
    });
    
    server.get('/opretprodukt', function (req, res) {
        res.render('pages/opretprodukt', {
    
        });
    });
    
    server.get('/galleri', function (req, res) {
        res.render('pages/galleri', {
    
        });
    });
    
    server.get('/opretbillede', function (req, res) {
        res.render('pages/opretbillede', {
    
        });
    });
    
    server.get('/arbejdere', function (req, res) {
        res.render('pages/arbejdere', {
    
        });
    });
    
    server.get('/opretarbejdere', function (req, res) {
        res.render('pages/opretarbejdere', {
    
        });
    });
    
    
    server.get('/info', function (req, res) {
        res.render('pages/info', {
    
        });
    });
    
    server.get('/opretinfo', function (req, res) {
        res.render('pages/opretinfo', {
    
        });
    });
    
    server.get('/kontakt', function (req, res) {
        res.render('pages/kontakt', {
    
        });
    });
}