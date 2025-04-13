import { ParseClient } from "seyfert";
import ClientBot from "./structs/ClientBot";

let client = new ClientBot();
client.start().then(() => client.uploadCommands());

declare module "seyfert" {
    interface UsingClient extends ParseClient<ClientBot> {}
}