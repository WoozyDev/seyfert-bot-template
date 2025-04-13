import { configDotenv } from "dotenv";
configDotenv();

import { config } from "seyfert";

export default config.bot({
    locations: {
        base: 'src',
        commands: 'commands',
        events: 'events'
    },
    token: process.env.TOKEN,
    intents: [
        "Guilds",
        // "GuildMessages",
        // "MessageContent",
        // "GuildVoiceStates",
        "GuildMembers"
    ]
})