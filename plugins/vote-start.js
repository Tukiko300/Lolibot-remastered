let handler = async (m, { conn, text, usedPrefix, command, isOwner, isPrems, isROwner }) => {
    let user = global.DATABASE._data.users[m.sender]
    if (!text) throw `*Escriva un texto para la votación*\n\n- Ejemplo: ${usedPrefix + command} soy gay?`
    if (!isPrems && user.limit < 1) return conn.reply(m.chat, `Te quedaste sin limites, compra más escribiendo ${usedPrefix}buylimit`, m)
    if (!isOwner || !isPrems || !isROwner) {
    global.DATABASE._data.users[m.sender].limit -= 1
    conn.reply(m.chat, `🎟️ Se utilizó *uno* de su *limite* por utilizar esta función!`, m)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `Todavía hay votos, si quieres eliminar escriba ${usedPrefix}delvote`
    }
    conn.send2Button(m.chat, `*🗳️ Votación iniciada!*\n\n*Voto:* ${text}`, `Si quieres eliminar la votación\nescriba *${usedPrefix}delvote*`, '✅ Si', `${usedPrefix}upvote`, '❌ No', `${usedPrefix}devote`, m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}

handler.help = ['startvote']
handler.tags = ['vote']
handler.command = /^(startvote|mulaivote)$/i
handler.group = true
handler.admin = true

module.exports = handler
