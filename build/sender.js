"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sender = void 0;
const libphonenumber_js_1 = __importStar(require("libphonenumber-js"));
const venom_bot_1 = require("venom-bot");
class Sender {
    constructor() {
        this.initialize();
    }
    ;
    sendText(to, message) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            //this.sendText("557188928500@c.us", "Essa mensagem foi enviada pelo bot");
            if (!(0, libphonenumber_js_1.isValidPhoneNumber)(to, "BR")) {
                throw new Error("Número inválido");
            }
            ;
            let phoneNumber = (_a = (0, libphonenumber_js_1.default)(to, "BR")) === null || _a === void 0 ? void 0 : _a.format("E.164").replace("+", "");
            ;
            phoneNumber = phoneNumber.includes("@c.us") ? phoneNumber : `${phoneNumber}@c.us`;
            yield this.client.sendText(phoneNumber, message).catch((erro) => console.log(erro));
            console.log(phoneNumber);
        });
    }
    initialize() {
        const qr = (base64Qrimg) => { };
        const status = (statusSession) => { };
        const start = (client) => {
            this.client = client;
            console.log("Client is ready");
        };
        (0, venom_bot_1.create)("wpp-sender-home", qr, status).then((client) => start(client)).catch((erro) => console.log(erro));
    }
    ;
}
exports.Sender = Sender;
//# sourceMappingURL=sender.js.map