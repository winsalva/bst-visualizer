const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

const path = require("path");

module.exports = {
    entry     : "./src/main.js",
    devtool   : "cheap-module-source-map",
    output : {
        path          : path.join(__dirname, "assets"),
        filename      : "bundle.min.js",
        libraryTarget : "umd"
    },
    devServer: {
        port: 8080,
        publicPath: "/assets",
        open: true
    }
};
