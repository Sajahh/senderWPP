import parsePhoneNumber, {isValidPhoneNumber} from "libphonenumber-js";
import { Whatsapp, create, Message, SocketState } from "venom-bot";
export class Sender {
    private client: Whatsapp;
    private connected: boolean;

    get IsConnected(): boolean {
        return this.connected;
    };

    constructor() {
        this.initialize();
    };

    async sendText(to: string, message: string) {
        if(!isValidPhoneNumber(to, "BR")) {
            throw new Error("Número inválido");
        };
        let phoneNumber = parsePhoneNumber(to, "BR")?.format("E.164").replace("+", "") as string; 
        phoneNumber = phoneNumber.includes("@c.us") ? phoneNumber : `${phoneNumber}@c.us`

        await this.client.sendText(phoneNumber, message).catch((erro) => console.log(erro));
        console.log(phoneNumber);
    }

    private initialize() {
        const   status = (state: SocketState) => {
            console.log("Status da conexão: ", state);
            if(state === "CONNECTED" || state === "SYNCING" || state === "UNPAIRED" || state === "UNLAUNCHED" ||  state === "OPENING" || state === "PAIRING") {
                this.connected = true;
            } else {
                this.connected = false;
            };
        };

        const start = (client: Whatsapp) => {
            this.client = client;
            console.log("Cliente iniciado");
            client.onStateChange(status);
        };
        create({session: 'whatsappbot', multidevice: true})
            .then((client) => start(client))
            .catch((erro) => {console.log(erro)});
    };
};
