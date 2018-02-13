exportere json filer
for at bruge skal du require modelen og for fat i produkter eller lignende
bruge for at for modulen implementeret
const json = require("../services/json_exporter_module/json_export_module");

bruge for fat i produkter json
json.produkter()


exempel på en route
const json = require("../services/json_exporter_module/json_export_module");
module.exports = (app) => {
    app.get("/",(req,res)=>{
        res.render("/pages/index",json.produkter())
    })
}