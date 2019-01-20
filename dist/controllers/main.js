"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const { HOST, PORT, ML_API } = process.env;
const ai = axios_1.default.create({ baseURL: ML_API });
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { url } = req.body;
        try {
            const { data } = yield ai.post("/normalize", { url });
            console.log(data);
            // const video_url = `${HOST}:${PORT}/tmp/${dest}`;
            res.send({ success: true, url: "/" });
        }
        catch (e) {
            res.send({ success: false, error: e.message });
        }
    });
}
exports.default = { create };
//# sourceMappingURL=main.js.map