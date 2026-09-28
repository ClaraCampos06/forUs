const inicio = new Date(2026, 8, 6)
const hoje = new Date()
const diferenca = hoje - inicio
const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))

const tela = document.querySelector("p")
tela.innerHTML = dias + " dias juntas..."

const dataAtual = document.querySelector("h2")


const dia = hoje.getDate()
const mes = hoje.getMonth() +1
const ano = hoje.getFullYear() 

dataAtual.innerHTML = `Hoje é dia ${dia}, mês ${mes} do ano ${ano} `