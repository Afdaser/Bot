require('dotenv').config();
const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(process.env.GREETINGS,
        Markup.keyboard([
            [process.env.ONE_BUTTON, process.env.TWO_BUTTON],
        ])
            .resize()
    )
);

bot.hears(process.env.ONE_BUTTON, (ctx) => ctx.reply(process.env.ONE_LINK))
bot.hears(process.env.TWO_BUTTON, (ctx) => ctx.reply(process.env.TWO_LINK))


bot.launch();



