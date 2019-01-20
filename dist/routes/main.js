"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = __importDefault(require("../controllers/main"));
const router = express_1.Router();
exports.router = router;
router.get("/", (req, res) => res.send("Happy Hacking! 🚀"));
router.post("/normalize", main_1.default.create);
//# sourceMappingURL=main.js.map