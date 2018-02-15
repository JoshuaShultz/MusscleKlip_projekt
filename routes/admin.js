/* Require these */
const sql_connection = require("../config/sql.js").connect();
const json_export = require("../services/json_exporter_module/json_export_module.js")
const log_module = require("../services/logging_module/logging_module.js");

module.exports = (server) => {
    server.get('/produkter', function (req, res) {
        res.render('pages/produkter', {
            produkter: json_export.products()

        });
        //log
        log_module.activityLog(req.connection.remoteAddress + " admin /produkter");
    });
    server.delete("/produkter/:id", (req, res) => {
        //log
        log_module.activityLog(req.connection.remoteAddress + " admin delete/produkter/:id");
        log_module.adminlog(req.connection.remoteAddress + " product with name " + json_export.products()[req.params.id].produktnavn + " has been deleted");
        //delete the requested produkt
        json_export.products().splice(req.params.id, 1)
        json_export.productsUpdate(JSON.stringify(json_export.products(), null, "\t"), res);
    })
    server.get('/opretprodukt', function (req, res) {
        res.render('pages/opretprodukt', {
        });
        //log
        log_module.activityLog(req.connection.remoteAddress + " admin /opretprodukt");

    });
    server.get('/produkter/:id', function (req, res) {
        res.status(200).json({
            product: json_export.products()[req.params.id]
        })
        //log
        log_module.activityLog(req.connection.remoteAddress + " admin /produkter/:id");
    });
    server.post("/opretprodukter", (req, res) => {
        //creating new object and pusing it to json then saving the json file
        let obj = {};
        obj.produktnavn = req.body.navn;
        obj.info = req.body.beskrivelse;
        obj.pris = req.body.pris;
        obj.produktbillede = req.body.billede;
        json_export.products().push(obj);
        json_export.productsUpdate(JSON.stringify(json_export.products(), null, "\t"), res);
        //log
        log_module.activityLog(req.connection.remoteAddress + " admin delete/produkter/:id");
        log_module.adminlog(req.connection.remoteAddress + ` product with values produktnavn : ${obj.produktnavn} beskrivelse : ${obj.info} pris : ${obj.pris} billede : ${obj.produktbillede} has been created`);
    })
    server.put("/redigereprodukter", (req, res) => {
        let id = req.body.id;
        //log
        log_module.activityLog(req.connection.remoteAddress + " admin put/redigereprodukter");
        log_module.adminlog(req.connection.remoteAddress + ` product with values produktnavn : ${json_export.products()[id].produktnavn} beskrivelse : ${json_export.products()[id].info} pris : ${json_export.products()[id].pris} billede : ${json_export.products()[id].produktbillede} has been changed to values produktnavn : ${req.body.navn} beskrivelse : ${req.body.beskrivelse} pris : ${req.body.pris} billede : ${req.body.produktbillede} `);
        //overwriting values and saving to json
        json_export.products()[id].produktnavn = req.body.navn;
        json_export.products()[id].info = req.body.beskrivelse;
        json_export.products()[id].pris = req.body.pris;
        json_export.products()[id].produktbillede = req.body.produktbillede;
        json_export.productsUpdate(JSON.stringify(json_export.products(), null, "\t"), res);
    })

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
    server.post("/bestiltid", (req, res) => {
        console.log(req.body)
        let obj = {};
        obj.navn = req.body.navn
        obj.tidspunkt = req.body.tidspunkt
        obj.tlf = req.body.tlf
        obj.barber = req.body.barber
        obj.besked = req.body.besked
    })
}