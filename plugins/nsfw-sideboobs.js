let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()

let handler  = async (m, { conn, args }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (chat.nsfw) {
conn.reply(m.chat, wait, m)
json = (await axios.get('https://meme-api.herokuapp.com/gimme/sideboobs')).data
conn.sendFile(m.chat, json.url, 'boobs.jpg', `*${json.title}*`, m, false)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['sideboobs']
handler.tags = ['nsfw']
handler.command = /^(sideboobs)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
