const log = require("../services/logging_module");
module.exports = (app)=>{
    app.get("/",(req,res)=>{
        log.log("hej");
    })
}