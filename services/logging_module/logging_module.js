const fs = require("fs");

/* Logging Module */
module.exports = {
    "log": (text) => {
        let date = new Date;
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        fs.stat(`./data/log/${year}-${month}-${day}.txt`, (err, stats) => {
            if (stats != undefined) {
                fs.appendFile(`./data/log/${year}-${month}-${day}.txt`, `\r\n ${text} ${h}:${m}:${s}`, (err) => {
                    if (err) {
                        throw err;
                    }
                })
            }
            else {
                fs.writeFile(`./data/log/${year}-${month}-${day}.txt`, `${text} ${h}:${m}:${s}`, (err) => {
                    if (err) {
                        throw err;
                    }
                })

            }


        })
    }
}