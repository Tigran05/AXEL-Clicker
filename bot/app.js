import { Telegraf, Markup } from 'telegraf'

const token = '7887498286:AAFgHWPdgcEHvRX322aOLyQainc3ot4SB3Y'
const webAppUrl = 'https://axel-clicker.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Hello! Press to start the app',
    Markup.inlineKeyboard([
      Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}`),
    ])
  )
})

bot.launch()
