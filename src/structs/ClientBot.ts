import { Client } from "seyfert";

export default class ClientBot extends Client<true> {
    static version: string = "";
    static ownerId: string = "";
    static instance: ClientBot;
    constructor() {
        super();
        ClientBot.instance = this;
    }
}