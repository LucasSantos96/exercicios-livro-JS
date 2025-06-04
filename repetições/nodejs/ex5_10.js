const prompt = require('prompt-sync')();

const valor = Number(prompt('Digite um valor R$: '));// recebe o valor da conta

const parcelas = Number(prompt("Número de parcelas: "));// recebe o número de parcelas

const valorParcelas = Math.floor(valor / parcelas); //calcula o valor sem decimais 

const valorFinal = valorParcelas + (valor % parcelas); // calcula o valor da última parcela com os centavos restantes

for(let i =1; i< parcelas; i++) {
    console.log(`${i}ª Parcela: R$ ${valorParcelas.toFixed(2)}`);
}
console.log(`${parcelas} ª Parcela: R$ ${valorFinal.toFixed(2)}`);