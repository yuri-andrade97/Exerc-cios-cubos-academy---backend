const nome = 'João Vitor de Souza Andrade';

function gerarNick(nome) {    
    let nick = nome.toLowerCase()
    nick = nick.split(" ").join("").slice(0, 12);
    nick = nick.replace(nick, `@${nick}`)
    
    console.log(nick)
}

gerarNick(nome)
