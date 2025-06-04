const prompt = require('prompt-sync')();
const produto = prompt("Produto: ") //Lê o nome do produto
const num = Number(prompt("Número de etiquetas: ")) //Lê o número de etiquetas

//Cria um laço de repetição até num/2 (pois imprime 2 etiquetas por linha)
let total = 0

for(let i = 0; i < num / 2; i++) {
    //Imprime duas etiquetas por linha
    total += 2; //Contabiliza as etiquetas
    console.log(`${produto.padEnd(30, ".")} ${produto.padEnd(30,".")} total: ${total}`);
}
if(num % 2 === 1) {
    //Se o número de etiquetas for ímpar
    console.log(produto.padEnd(30,".")); //Imprime mais uma etiqueta
}       