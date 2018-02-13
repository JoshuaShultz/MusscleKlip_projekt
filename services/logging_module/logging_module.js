const fs = require("fs");

/* Logging Module */
module.exports = {
    "activityLog": (text) => {
        let date = new Date;
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        fs.stat(`./data/log_files/activity_logs/${year}`, (err, folderStats) => {
            if (folderStats != undefined) {
                fs.stat(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`, (err, stats) => {
                    if (stats != undefined) {
                        fs.appendFile(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`, `\r\n${h}:${m}:${s} ${text} `, (err) => {
                            if (err) {
                                throw err;
                            }
                        })
                    }
                    else {
                        fs.writeFile(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`, `${h}:${m}:${s} ${text}`, (err) => {
                            if (err) {
                                throw err;
                            }
                        })

                    }
                })
            }
            else {
                fs.mkdir(`./data/log_files/activity_logs/${year}`);
                fs.stat(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`, (err, stats) => {
                    if (stats != undefined) {
                        fs.appendFile(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`, `\r\n${h}:${m}:${s} ${text}`, (err) => {
                            if (err) {
                                throw err;
                            }
                        })
                    }
                    else {
                        fs.writeFile(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`, `${h}:${m}:${s} ${text} `, (err) => {
                            if (err) {
                                throw err;
                            }
                        })
                    }
                })
            }
        })
    }
}