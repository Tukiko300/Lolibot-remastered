const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Etiqueta una imagen!'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tamaño/peso no soportado!`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = global.API('dzx', '/api/canvas/trash', { url }) //`https://api.dhamzxploit.my.id/api/canvas/trash?url=${url}`
  let stiker = await sticker(null, wanted, global.packname, global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply(error)
  }
}

handler.help = ['strash']
handler.tags = ['sticker']
handler.command = /^(strash|trash)$/i

module.exports = handler
