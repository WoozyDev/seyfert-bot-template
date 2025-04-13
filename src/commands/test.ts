import { Command, CommandContext, Declare } from "seyfert";

@Declare({
    name: "test",
    description: "Test command"
})
export default class TestCommand extends Command {
    async run(context: CommandContext) {
        context.write({ content: "Hello" });
    }
}