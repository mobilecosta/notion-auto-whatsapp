//abaixo está criado o código que lerá o qrCode e irá parmencer logado na sessão
const { Client, LocalAuth} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client ({
    AuthStrategy: new LocalAuth()  //aqui ele manterá a sessão ativa
});

//abaixo está o código que irá gera o QrCode
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

//abaixo de o código que dará inicio ao bot
client.once('ready', () => {
    console.log('Bot está Pronto!')
});

client.initialize();

