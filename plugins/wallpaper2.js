const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Looking for what?'
  let res = await fetch(global.API('https://wall.alphacoders.com/api2.0','/get.php', {
    auth: '3e7756c85df54b78f934a284c11abe4e',
    method: 'search',
    term: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
  await conn.sendFile(m.chat, img.url_image, 'wallpaper', 'Here wallpaper!', m)
}

handler.help = ['wallpaper2']
handler.tags = ['internet']
handler.command = /^(wallpaper2|wall2)$/i

module.exports = handler
