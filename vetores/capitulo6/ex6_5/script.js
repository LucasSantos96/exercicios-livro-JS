
/*
// Cria um array vazio para armazenar os carros
const carros = []
// Adiciona um objeto carro com modelo e preço ao array
carros.push({ modelo: 'Sandero', preco: 46500 })
// Adiciona outro objeto carro ao array
carros.push({ modelo: 'Palio', preco: 37800 })

// Percorre o array de carros e exibe o modelo e o preço formatado
for(let carro of carros) {
    console.log(`${carro.modelo} - R$: ${carro.preco.toFixed(2)}`)
}

//comente console.log(carros)

//Desestruturação e Operador Spread

const motos = []
const modelo = 'XRE 300'
const preco = 25000
// Adiciona um objeto moto com modelo e preço ao array usando desestruturação
motos.push({ modelo, preco }) 

for(let moto of motos) {
    const { modelo, preco } = moto // Desestrutura o objeto moto
    console.log(`${modelo} - R$: ${preco.toFixed(2)}`) // Exibe o modelo e o preço formatado
}




const pacientes = ["ana", "joão", "maria", "pedro", "luiz"]
//const [a,b,c,d] = pacientes // Desestruturação do array pacientes
//console.log(a, b, c, d) // Exibe os primeiros quatro elementos do array

const [atender, proximo, ...resto] = pacientes // Desestruturação com o operador rest
console.log(atender) // Exibe o primeiro elemento do array
console.log(proximo) // Exibe o segundo elemento do array
console.log(resto) // Exibe o restante do array como um novo array
console.log(resto.length) // Exibe o tamanho do array resto
console.log(resto[0]) // Exibe o primeiro elemento do array resto

*/

// Spread Operator
const carro = { modelo: 'Fusca', preco: 15000 }
const carro2 = {...carro, ano:2010}// Cria um novo objeto carro2 com as propriedades do objeto carro e adiciona a propriedade ano
//console.log(carro2) // Exibe o objeto carro2 com as propriedades modelo, preco e ano

let pacientes = ["anna", "Maria"]
pacientes = ["Pedro", ...pacientes ]//Adiciona o elemento "Pedro" no início do array pacientes
pacientes = [...pacientes, "João"] // Adiciona o elemento "João" no final do array pacientes

console.log(pacientes) // Exibe o array pacientes com o elemento "Pedro" adicionado no início 