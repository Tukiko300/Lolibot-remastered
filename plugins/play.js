/*const { MessageType } = require("@adiwajshing/baileys");
let { youtubeSearch } = require('@bochilteam/scraper')
let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*#play Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[βππππβ] π»πΎ ππΈπ΄π½ππΎ, π½πΎ πΏππ³π΄ π΄π½π²πΎπ½πππ°π π΄π» π°ππ³πΈπΎ/ππΈπ³π΄πΎ, πΈπ½ππ΄π½ππ΄ π²πΎπ½ πΎπππΎ π½πΎπΌπ±ππ΄/ππΈπππ»πΎ*'
conn.play = conn.play ? conn.play : {}
if (conn.user.jid in conn.play) throw 'TodΙviΙ hΙy un video pendiente descΙrgΙndode, intente de nuevo mΙs tΙrde'
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
let _url = 'www.youtube.com/watch?v=' + videoId
let url = 'http://www.youtube.com/watch?v=' + videoId
let ptxt = `\t\t\t*Γ π» DescΙrgΙ de YouTube π» Γ*

*β’ Titulo:* ${title}
*β’ DurΙciΓ³n:* ${durationH}
*β’ VisitΙs:* ${viewH}
*β’ PublicΙdo:* ${publishedTime}
*β’ Url:* ${_url}`
let ytimg = await (await fetch(thumbnail)).buffer()
let ytplay =  await conn.prepareMessage(m.chat, ytimg, MessageType.image, { thumbnail: ytimg })
let gbutsan = [ {buttonId: `${usedPrefix}ytmp3 ${url}`, buttonText: {displayText: 'AUDIO'}, type: 1}, {buttonId: `${usedPrefix}ytmp4 ${url}`, buttonText: {displayText: 'VIDEO'}, type: 1} ]
let gbuttonan = { imageMessage: ytplay.message.imageMessage, contentText: ptxt, footerText: '-', buttons: gbutsan, headerType: 4 }
await conn.sendMessage(m.chat, gbuttonan, MessageType.buttonsMessage, { quoted: m })
//await conn.send2ButtonImg(m.chat, thumbnail, ptxt, author, 'AUDIO', `${usedPrefix}ytmp3 ${url}`, 'VIDEO', `${usedPrefix}ytmp4 ${url}`, m, false, { thumbnail: thumbyt })
}

handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^(play)$/i

module.exports = handler*/
