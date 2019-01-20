"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
const express_1 = __importDefault(require("express"));
const main_1 = require("./routes/main");
class Server {
    constructor() {
        this.setRoutes = () => {
            this.app.get("/", main_1.router);
        };
        this.app = express_1.default();
        this.setRoutes();
        this.init();
    }
    //   Initialize App
    init() {
        this.app.listen(3000, this.listen);
    }
    listen(err) {
        if (err)
            throw err;
        console.log("> Listening");
    }
}
exports.Server = Server;
module.exports = new Server();
//# sourceMappingURL=main.js.map