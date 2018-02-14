/* Require these */
const sql_connection = require("../config/sql.js").connect();
const json_export = require("../services/json_exporter_module/json_export_module.js")
const log_module = require("../services/logging_module/logging_module.js");

module.exports = (server) => {
    server.get('/produkter', function (req, res) {
        res.render('pages/produkter', {
            produkter: json_export.products()

        });
    });
    server.delete("/produkter/:id", (req, res) => {
        json_export.products().splice(req.params.id, 1)
        json_export.productsUpdate(JSON.stringify(json_export.products(), null, "\t"), res);
    })
    server.get('/opretprodukt', function (req, res) {
        res.render('pages/opretprodukt', {
        });

    });
    server.get('/produkter/:id', function (req, res) {
        res.json(200,{
            product:json_export.products()[req.params.id]
        })
    });
    server.post("/opretprodukter", (req, res) => {
        console.log("hej")
        let obj = {};
        obj.id = (json_export.products().length + 1);
        obj.produkternavn = req.body.navn;
        obj.info = req.body.beskrivelse;
        obj.pris = req.body.pris;
        obj.produktbillede = req.body.billede;
        json_export.products().push(obj);
        json_export.productsUpdate(JSON.stringify(json_export.products(), null, "\t"), res);
    })
    server.post("/redigereprodukter", (req, res) => {
        json_export.products()[id].id = req.body.id;
        json_export.products()[id].produkternavn = req.body.navn;
        json_export.products()[id].info = req.body.beskrivelse;
        json_export.products()[id].pris = req.body.pris;
        json_export.products()[id].produktbillede = req.body.billede;
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
}