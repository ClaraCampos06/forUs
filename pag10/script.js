
function guardarMensagem() {

    let texto = document.querySelector("#mensagem").value

    if (texto.trim() === "") {

        alert("Escreva alguma coisa primeiro!")

        return
    }

    let hoje = new Date()

    let dia = hoje.getDate()
    let mes = hoje.getMonth() + 1
    let ano = hoje.getFullYear()

    let data = `${dia}/${mes}/${ano}`

    let mensagem = {
        texto: texto,
        data: data
    }

    let mensagens = JSON.parse(localStorage.getItem("mensagens")) || []

    mensagens.push(mensagem)

    localStorage.setItem("mensagens", JSON.stringify(mensagens))

    mostrarMensagem(mensagem)

    document.querySelector("#mensagem").value = ""
}

function mostrarMensagem(mensagem) {

    let diario = document.querySelector("#diario")

    let entrada = document.createElement("div")

    entrada.classList.add("entrada")

    entrada.innerHTML = `
        <small>${mensagem.data}</small>
        <p>${mensagem.texto}</p>
    `

    diario.appendChild(entrada)
}

function carregarMensagens() {

    let mensagens = JSON.parse(localStorage.getItem("mensagens")) || []

    for (let mensagem of mensagens) {

        mostrarMensagem(mensagem)

    }
}
carregarMensagens()