const db = require("mongoose");

const connect = function (url) {
    db.Promise = global.Promise;
    db.connect(url, {
        useNewUrlParser: true,
    })
        .then(() => console.log("Message:db conectada con exito"))
        .catch((err) => console.error("Error en conexion db"));
}

module.exports = connect;

