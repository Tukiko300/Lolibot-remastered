let util = require('util')
let path = require('path')

let handler = m => m

handler.before = async function (m, { conn, command }) {
if ((m.isBaileys && m.fromMe) || m.fromMe ) return true

let audio1A = /onichan|senpai|sempai|yamete/i
let audio1B = audio1A.exec(m.text)

let audio2A = /bot te amo|te amo bot/i
let audio2B = audio2A.exec(m.text)

let audio3A = /bot eres hombre o mujer/i
let audio3B = audio3A.exec(m.text)

let audio4A = /a mimir/i
let audio4B = audio4A.exec(m.text)

let audio5A = /pasen hentai|pasen hentay|antojen/i
let audio5B = audio5A.exec(m.text)

let audio6A = /eres gay|que gay/i
let audio6B = audio6A.exec(m.text)

let audio7A = /mirame/i
let audio7B = audio7A.exec(m.text)

let audio8A = /😭|:"c|:'c/i
let audio8B = audio8A.exec(m.text)

let audio9A = /error/i
let audio9B = audio9A.exec(m.text)

let audio10A = /estoy aburrid|ando aburrid|que aburrid/i
let audio10B = audio10A.exec(m.text)

let audio11A = /leche/i
let audio11B = audio11A.exec(m.text)

let audio12A = /jajajaja/i
let audio12B = audio12A.exec(m.text)

let audio13A = /suicidar/i
let audio13B = audio13A.exec(m.text)


if (audio1B) {
	let vn = './storage/audio/Yamete_onii_chan.mp3'
	conn.sendFile(m.chat, vn, 'Yamete_onii_chan.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio2B) {
	let vn = './storage/audio/Yo_igual_te_amo_pero.mp3'
	conn.sendFile(m.chat, vn, 'Yo_igual_te_amo_pero.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio3B) {
	let vn = './storage/audio/Tontito_soy_hombre.mp3'
	conn.sendFile(m.chat, vn, 'Tontito_soy_hombre.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio4B) {
	let vn = './storage/audio/Tienes_que_mimir.mp3'
	conn.sendFile(m.chat, vn, 'Tienes_que_mimir.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio5B) {
	let au = ["./storage/audio/Pensamientos_sexuales.mp3", "./storage/audio/No_te_da_verguenza.mp3"]
	let vn = au[Math.floor(Math.random() * au.length)]
	conn.sendFile(m.chat, vn, 'Pensamientos_verguensa.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio6B) {
	let vn = './storage/audio/Ok_maricon.mp3'
	conn.sendFile(m.chat, vn, 'Ok_maricon.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio7B) {
	let vn = './storage/audio/No_miro_personas_lindas.mp3'
	conn.sendFile(m.chat, vn, 'No_miro_personas_lindas.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio8B) {
	let vn = './storage/audio/No_llores_onii-chan.mp3'
	conn.sendFile(m.chat, vn, 'No_llores_onii-chan.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio9B) {
	let vn = './storage/audio/Me_cago_en_la_concha.mp3'
	conn.sendFile(m.chat, vn, 'Me_cago_en_la_concha.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio10B) {
	let vn = './storage/audio/Juguemos_al_ascensor.mp3'
	conn.sendFile(m.chat, vn, 'Juguemos_al_ascensor.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio11B) {
	let vn = './storage/audio/Esto_no_es_leche.mp3'
	conn.sendFile(m.chat, vn, 'Esto_no_es_leche.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio12B) {
	let vn = './storage/audio/Eres_muy_chistoso.mp3'
	conn.sendFile(m.chat, vn, 'Eres_muy_chistoso.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	} else

if (audio13B) {
	let vn = './storage/audio/El_suicidio_no_es_una_opcion.mp3'
	conn.sendFile(m.chat, vn, 'El_suicidio_no_es_una_opcion.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	}



}

module.exports = handler