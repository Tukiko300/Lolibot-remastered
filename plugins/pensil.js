let uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')
let util = require('util')

let handler = async(m, { conn, args }) => {
try {
gay = `sayang`

  if (!m.quoted) throw `Tag Fotonya ` + gay // org gay

    await m.reply(`*[❗] Wait,Sedang Dalam Proses...*`)
  let q = m.quoted ? m.quoted : m
  let media = await q.download()
  let img = await uploadImage(media)
  let buffer = await (await fetch('https://lolhuman.herokuapp.com/api/editor/pencil?apikey=Dawnfrostkey&img=' + img + '&apa=nani')).buffer() // Masukan ApiKeymu disini..
  let res = await fetch('https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/info/credit.json')
  let json = await res.json()

 await conn.sendFile(m.chat, buffer, 'gambar.jpg', 'Nih Mhank', m)

} catch (e) {

 err = await (await fetch('https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/info/erorr.json')).json() // jika Erorr
   throw err
  }
}
handler.help = ['pensil']
handler.tags = ['maker']
handler.command = /^(pensil)$/i

handler.fail = null

module.exports = handler
