function plantarMemoria() {

    let texto = document.querySelector("#memoria").value

    if (texto.trim() === "") {

        alert("Escreva uma memória")

        return
    }

    // Pega as memórias que já estão salvas
    let memorias = JSON.parse(localStorage.getItem("memorias")) || []

    // Adiciona a nova memória
    memorias.push(texto)

    // Salva novamente
    localStorage.setItem("memorias", JSON.stringify(memorias))

    // Cria a memória na tela
    criarMemoria(texto)

    // Limpa o textarea
    document.querySelector("#memoria").value = ""
}


function criarMemoria(texto, indice) {

    let jardim = document.querySelector("#jardim")

    let memoria = document.createElement("div")

    memoria.classList.add("memoria")

    memoria.textContent = texto

    let apagar = document.createElement("button")

    apagar.textContent = "Apagar"

    apagar.onclick = function() {

        let memorias = JSON.parse(localStorage.getItem("memorias")) || []

        memorias.splice(indice, 1)

        localStorage.setItem("memorias", JSON.stringify(memorias))

        memoria.remove()

    }

    memoria.appendChild(apagar)

    jardim.appendChild(memoria)
}


function carregarMemorias() {

    let memorias = JSON.parse(localStorage.getItem("memorias")) || []

    for (let texto of memorias) {

        criarMemoria(texto)

    }
}


carregarMemorias()