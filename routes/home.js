/* Require these */
const json_export = require("../services/json_exporter_module/json_export_module.js")
const log_module = require("../services/logging_module/logging_module.js");

module.exports = (server) => {
    server.get("/", (req, res) => {
        res.render("pages/index", {
            galleri: json_export.galleri(),
            footer: json_export.footer(),
            prices: json_export.prices(),
            openHours: json_export.openHours(),
            products : json_export.products()
        })
        log_module.activityLog(req.connection.remoteAddress + " /index");
    })
}