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
        const qr = (base64Qrimg: string) => {
            console.log("QR RECEIVED", base64Qrimg);
        };

        const statusFind = (statusSession: string ) => {
            console.log(`Esse é o Status da Sessão: ${statusSession}`);
        };

       const start = (client: Whatsapp) => {
            this.client = client;
            console.log("Client is ready")
        };
       create("wpp-sender-test", qr, statusFind).then((client) => start(client)).catch((erro) => console.log(erro));
    };
}
