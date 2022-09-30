import { start } from "repl";
import { Whatsapp, create, Message, SocketState } from "venom-bot";

export class Sender {
    private client: Whatsapp;

    constructor() {
        this.initialize();
        
    };

    async sendText(to: string, message: string) {
      //this.sendText("557188928500@c.us", "Essa mensagem foi enviada pelo bot");
    await this.client.sendText(to, message).catch((erro) => console.log(erro));
    }

    private initialize() {
        const qr = (base64Qrimg: string) => {};

        const status = (statusSession: string ) => {};

       const start = (client: Whatsapp) => {
            this.client = client;
            console.log("Client is ready")
        };
       create("wpp-sender-test", qr, status).then((client) => start(client)).catch((erro) => console.log(erro));
    };
}
