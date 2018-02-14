const fs = require("fs");
module.exports = {
    "products": () => {
        return require("../../data/produkter");
    },
    "productsUpdate": (data, res) => {
        fs.writeFile("data/produkter.json", data, (err) => {
            if (err) {
                console.log(err)
            }
        })
        res.render('pages/produkter', {
            produkter: products()

        });
    },
    "reservation": () => {
        return require("../../data/reservation");
    },
    "about": () => {
        return require("../../data/about");
    },
    "footer": () => {
        return require("../../data/footer");
    },
    "garanti": () => {
        return require("../../data/garanti");
    },
    "galleri": () => {
        return require("../../data/galleri");
    }
}