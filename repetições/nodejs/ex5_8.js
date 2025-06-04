// Importa o módulo prompt-sync para ler entradas do usuário via terminal
const prompt = require("prompt-sync")() 

// Exibe mensagem inicial do programa
console.log("Programa Anos de Copa do Mundo. Digite 0 para sair")
// Exibe uma linha separadora
console.log('--------------------------------------------')

// Inicia um loop que só termina quando o usuário digita 0
do{
    // Solicita ao usuário que digite um ano e converte para número
    const ano = Number(prompt("Ano:"))
    // Se o usuário digitar 0, sai do loop
    if(ano === 0) {
        break //Sai da repetição
    // Se o ano for 1942 ou 1946, informa que não houve copa devido à Segunda Guerra Mundial
    } else if (ano == 1942 || ano == 1946){
        console.log(`Não houve copa em ${ano} (Segunda Guerra Mundial)`)
    // Se o ano for a partir de 1930 e o resto da divisão por 4 for 2, é ano de copa
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim! ${ano} é ano de copa do mundo!`)
    // Caso contrário, informa que não é ano de copa
    }else {
        console.log(`Não... ${ano} não e ano de Copa do Mundo.`)
    }
// Repete o processo até que o usuário digite 0
} while (true)
