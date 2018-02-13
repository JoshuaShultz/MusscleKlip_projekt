const fs = require("fs");
let writeLogStream = startLogStream();
function startLogStream() {
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    var logger =
        fs.createWriteStream(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`,
            {
                flags: 'a', // 'a' means appending (old data will be preserved)
                autoClose: false
            }
        )
    return logger;
}
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
                        writeLogStream.write(`${h}:${m}:${s} ${text}\r\n`)
                    }
                    else {
                        writeLogStream.end();
                        writeLogStream = startLogStream();
                    }
                })
            }
            else {
                fs.mkdir(`./data/log_files/activity_logs/${year}`);
                fs.stat(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`, (err, stats) => {
                    fs.stat(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`, (err, stats) => {
                        if (stats != undefined) {
                            writeLogStream.write(`${h}:${m}:${s} ${text}\r\n`)
                        }
                        else {
                            writeLogStream.end();
                            writeLogStream = startLogStream();
                        }
                    })
                })
            }
        })
    }
}