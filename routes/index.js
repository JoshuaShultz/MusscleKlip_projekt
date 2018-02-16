module.exports = (server) => {
    require("./home")(server);
    require("./admin")(server);
    require("./login")(server);
}