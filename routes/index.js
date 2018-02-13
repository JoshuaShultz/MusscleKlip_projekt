const log = require("../services/logging_module/logging_module");
const sql = require("../config/sql.js").connect();
module.exports = (app)=>{
    app.get("/",(req,res)=>{
        res.render("pages/index")
        log.activityLog(req.connection.remoteAddress + " /index");
    })

    sql.query("SELECT * FROM `tb_test`", function (err, data) {
        console.log(data);
    })
}