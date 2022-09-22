const {create, Whatsapp, Message, SocketState} = require("venom-bot");


class Sender {
    private client: Whatsapp;
}
    constructor() {
        this.client = create();
    }