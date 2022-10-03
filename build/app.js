"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sender_1 = require("./sender");
const sender = new sender_1.Sender();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/status", (req, res) => { });
app.get("/send", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { to, message } = req.body;
    try {
        yield sender.sendText(to, message);
        return res.status(200).json({ message: "Mensagem enviada" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro ao enviar mensagem" });
    }
}));
app.listen(8000);
//# sourceMappingURL=app.js.map