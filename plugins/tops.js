let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]

let handler = async (m, { conn, command, text, groupMetadata }) => {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    let c
    do c = ps[Fl(R() * ps.length)]
    while (b === a)
    let d
    do d = ps[Fl(R() * ps.length)]
    while (b === a)
    let e
    do e = ps[Fl(R() * ps.length)]
    while (b === a)
    let f
    do f = ps[Fl(R() * ps.length)]
    while (b === a)
    let g
    do g = ps[Fl(R() * ps.length)]
    while (b === a)
    let h
    do h = ps[Fl(R() * ps.length)]
    while (b === a)
    let i
    do i = ps[Fl(R() * ps.length)]
    while (b === a)
    let j
    do j = ps[Fl(R() * ps.length)]
    while (b === a)

var top = 'INDEFINIDO'
       if (command.includes('gay')) {
       top = '🏳‍🌈 TOP 10 GAYS/LESBIANAS DEL GRUPO 🏳‍🌈'
} else if (command.includes('furr')) {
       top = '🦊 TOP 10 FURROS/AS DEL GRUPO 🦊'
} else if (command.includes('pajer')) {
       top = '💦 TOP 10 PAJEROS/AS DEL GRUPO 💦'
} else if (command.includes('otakus')) {
	   top = '🏵️ TOP 10 OTAKUS DEL GRUPO 🏵️'
} else if (command.includes('lind')) {
       top = '🤩 TOP 10 LINDOS/AS DEL GRUPO 🤩'
}

let _top = `
*${top}*
    
*• 01.* ${toM(a)}
*• 02.* ${toM(b)}
*• 03.* ${toM(c)}
*• 04.* ${toM(d)}
*• 05.* ${toM(e)}
*• 06.* ${toM(f)}
*• 07.* ${toM(g)}
*• 08.* ${toM(h)}
*• 09.* ${toM(i)}
*• 10.* ${toM(j)}
`.trim()
m.reply(_top, null, {
        contextInfo: {
            mentionedJid: [a, b, c, d, e, f, g, h, i, j]
        }
    })

}

handler.help = ['gays', 'pajer@s', 'furr@s', 'otakus'].map(v => 'top' + v + '')
handler.tags = ['fun']
handler.command = /^top(gays|pajer@s|pajeros|furr@s|furros|otakus|lindos|lindas|lindo)$/i
handler.group = true

handler.fail = null

module.exports = handler
