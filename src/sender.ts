import { Whatsapp, create, Message, SocketState } from "venom-bot";


class Sender {
    private client: Whatsapp;
    

    constructor() {
        this.initialize();
    };

   sendText(to: string, body: string) {
      //this.sendText("5571988928500@c.us", "Essa mensagem foi enviada pelo bot");
    this.client.sendText(to, body);
    }

    private initialize() {
        const qr = (base64Qrimg: string) => {};

        const status = (statusSession: string ) => {};

       const start = (client: Whatsapp) => {
            this.client = client;
            console.log("Client is ready")
        };

    create("wpp-sender",qr, status).then((client: Whatsapp) => start(client)).catch((erro: string) => {
            console.log(erro);
            });
        }
        };


    export default Sender;
