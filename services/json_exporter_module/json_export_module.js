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
    },
    "reservation": () => {
        return require("../../data/reservation");
    },
    "reservationUpdate": (data, res) => {
        fs.writeFile("data/reservation.json", data, (err) => {
            if (err) {
                console.log(err)
            }
        })
    },
    "about": () => {
        return require("../../data/about");
    },
    "footer": () => {
        return require("../../data/footer");
    },
    "footerUpdate": (data) => {
        fs.writeFile("data/footer.json", data, (err) => {
            if (err) {
                console.log(err)
            }
        })
    },
    "garanti": () => {
        return require("../../data/garanti");
    },
    "galleri": () => {
        return require("../../data/galleri");
    },
    "prices":()=>{
        return require("../../data/prices");
    },
    "openHours":()=>{
        return require("../../data/openHours");
    }
}