/* Require these */
const sql_connection = require("../config/sql.js").connect();
const json_export = require("../services/json_exporter_module/json_export_module.js")
const log_module = require("../services/logging_module/logging_module.js");

module.exports = (server) => {
    server.get("/login", (req, res) => {
        res.render("pages/login")
        
        log_module.activityLog(req.connection.remoteAddress + " /index");
    })
    server.post("/login", (req, res) => {
        var sess = req.session;

		var post = req.body;
		var name = post.user_name;
		var pass = post.password;
        sql_connection.query(`SELECT employee_id,fk_employee_role_id, employee_name FROM tb_employees where employee_userName = ? AND employee_password = ?`,[name,pass],(err,data)=>{
            if (data.length) {
                console.log(data);
                req.session.userId = data[0].employee_id;
                req.session.name = data[0].employee_name;
                req.session.user = data[0];
                req.session.rights = data[0].fk_employee_role_id;
                if (req.session.rights == 1){
                    res.redirect('/produkter');
                }
                else{
                    res.redirect('/kontakt');
                }
				
            }
            else{
                res.redirect("/login");
            }
        })
        log_module.activityLog(req.connection.remoteAddress + " /index");
    })
}