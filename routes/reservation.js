/* Require these */
const sql_connection = require("../config/sql.js").connect();
const json_export = require("../services/json_exporter_module/json_export_module.js")
const log_module = require("../services/logging_module/logging_module.js");

module.exports = (server)=>{
    server.get("/",(req,res)=>{
        res.render("pages/index")
        log.activityLog(req.connection.remoteAddress + " /index");
    })
}