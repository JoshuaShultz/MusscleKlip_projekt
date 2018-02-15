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
        res.status(200).json({ sucess: true })
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
        res.status(200).json({ sucess: true })
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
        json_export.productsUpdate(JSON.stringify(json_export.products(), null, "\t"));
        res.status(200).json({ sucess: true })
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
            footer: json_export.footer()
        });

        
    });
    server.put("/retinfo", (req, res) => {
        log_module.activityLog(req.connection.remoteAddress + " admin put/retinfo");
        log_module.adminlog(req.connection.remoteAddress + ` footer has been changed from : navn: ${json_export.footer()[0].navn} vej: ${json_export.footer()[0].vej} postnr: ${json_export.footer()[0].postnr} by: ${json_export.footer()[0].by} email: ${json_export.footer()[0].email} tlf: ${json_export.footer()[0].tlf} to: navn: ${ req.body.navn} vej: ${ req.body.vej} postnr: ${ req.body.postnr} by: ${ req.body.by} email: ${ req.body.email} tlf: ${ req.body.tlf} 
        `);
        json_export.footer()[0].navn = req.body.navn;
        json_export.footer()[0].vej = req.body.vej;
        json_export.footer()[0].postnr = req.body.postnr;
        json_export.footer()[0].by = req.body.by;
        json_export.footer()[0].email = req.body.email;
        json_export.footer()[0].tlf = req.body.tlf;
        json_export.footerUpdate(JSON.stringify(json_export.footer()));


    })

    server.get('/opretinfo', function (req, res) {
        res.render('pages/opretinfo', {

        });
    });

    server.get('/kontakt', function (req, res) {
        res.render('pages/kontakt', {
            reservation: json_export.reservation()

        });
    });
    server.post("/bestiltid", (req, res) => {
        console.log(req.body)
        let obj = {};
        obj.navn = req.body.name
        obj.tidspunkt = req.body.time
        obj.tlf = req.body.phone
        obj.barber = req.body.cutter
        obj.besked = req.body.message
        json_export.reservation().push(obj);
        json_export.reservationUpdate(JSON.stringify(json_export.reservation(), null, "\t"))
        res.status(200).json({ sucess: true })
    })
    server.delete("/sletbestilling/:id", (req, res) => {
        //log
        log_module.activityLog(req.connection.remoteAddress + " admin delete/sletbestilling/:id");
        log_module.adminlog(req.connection.remoteAddress + " reservation with name " + json_export.reservation()[parseInt(req.params.id)].navn + " has been deleted");
        // delete the requested order
        json_export.reservation().splice(req.params.id, 1)
        json_export.reservationUpdate(JSON.stringify(json_export.reservation(), null, "\t"));
        res.status(200).json({ sucess: true })
    })
}