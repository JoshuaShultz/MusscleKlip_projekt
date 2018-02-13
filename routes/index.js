const log = require("../services/logging_module/logging_module");
module.exports = (app)=>{
    app.get("/",(req,res)=>{
        res.render("pages/index")
        log.activityLog(req.connection.remoteAddress + " /index");
    })
}