const fs = require("fs");
/*activity log function*/
let writeLogStream = startLogStream();
function createFolders() {
    let date = new Date;
    let year = date.getFullYear();
    if (!fs.existsSync(`./data/log_files/activity_logs/${year}`)) {
        fs.mkdirSync(`./data/log_files/activity_logs/${year}`);
    }
    if (!fs.existsSync(`./data/log_files/admin_logs/${year}`)) {
        fs.mkdirSync(`./data/log_files/admin_logs/${year}`);
    }
}
function startLogStream() {
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (!fs.existsSync(`./data/log_files/activity_logs/${year}`)) {
        createFolders();
    }
    else {
        var logger =
            fs.createWriteStream(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`,
                {
                    flags: 'a', // 'a' means appending (old data will be preserved)
                    autoClose: false
                }
            )
    }
    return logger;
}
/*admin log function*/
let writeAdminLogStream = startAdminLogStream();
function startAdminLogStream() {
    let date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (!fs.existsSync(`./data/log_files/admin_logs/${year}`)) {
        createFolders();
    }
    else {
        var adminLogger =
            fs.createWriteStream(`./data/log_files/admin_logs/${year}/${year}-${month}-${day}.txt`,
                {
                    flags: 'a', // 'a' means appending (old data will be preserved)
                    autoClose: false
                }
            );
    }
    return adminLogger;

}
/* Logging Module */
module.exports = {
    "activityLog": (text) => {
        let date = new Date;
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        fs.stat(`./data/log_files/activity_logs/${year}/${year}-${month}-${day}.txt`, (err, stats) => {
            if (stats != undefined) {
                writeLogStream.write(`${h}:${m}:${s} ${text}\r\n`)
            }
            else {
                if (writeLogStream != undefined) {
                    writeLogStream.end();
                }
                writeLogStream = startLogStream();
            }
        })
    },
    "adminlog": (text) => {
        let date = new Date;
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        fs.stat(`./data/log_files/admin_logs/${year}/${year}-${month}-${day}.txt`, (err, stats) => {
            if (stats != undefined) {
                writeAdminLogStream.write(`${h}:${m}:${s} ${text}\r\n`)
            }
            else {
                if (writeAdminLogStream != undefined) {
                    writeAdminLogStream.end();
                }
                writeAdminLogStream = startLogStream();
            }
        })
    }
}