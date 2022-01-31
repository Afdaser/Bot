require('dotenv').config();
const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN);

const keyboard = Markup.inlineKeyboard([
    Markup.urlButton(process.env.ONE_BUTTON, process.env.ONE_LINK),
    Markup.urlButton(process.env.TWO_BUTTON, process.env.TWO_LINK),
]);

bot.start((ctx) =>
    ctx.telegram.sendMessage(ctx.chat.id,process.env.GREETINGS,{ reply_markup: keyboard, parse_mode: "MarkdownV2" })
);
bot.launch();



