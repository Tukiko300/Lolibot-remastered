const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
  if (!m.quoted) throw 'Etiqueta un mensaje para mencionar a todos!'
  let users = participants.map(u => u.jid)
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  let msg = conn.cMod(
    m.chat,
    conn.prepareMessageFromContent(
      m.chat,
      { [c.toJSON ? q.mtype : MessageType.extendedText]: c.toJSON ? c.toJSON() : {
        text: c || ''
      } },
      {
        contextInfo: {
          mentionedJid: users
        },
        quoted: m
      }
    ),
    text || q.text 
  )
  await conn.relayWAMessage(msg)
}

handler.help = ['tag']
handler.tags = ['adm']
handler.command = /^(hidetag|tag)$/i

handler.group = true
handler.admin = true

module.exports = handler

