const cidades = ["Pelotas", "Porto Alegre", "São Paulo", "Rio de Janeiro", "Curitiba"];

//cidades.push("Rio Grande");// Adiciona Rio Grande ao final do array

//cidades.unshift("Porto Alegre");// Adiciona Porto Alegre ao início do array

//const ultima = cidades.pop();// Remove o último elemento do array e o retorna

//const primeira = cidades.shift();// Remove o primeiro elemento do array e o retorna

for(let i =0; i<cidades.length; i++){
    console.log(cidades[i]);
}
console.log("-".repeat(40))
console.log(cidades.toString())
console.log(cidades.join(" - "))// Converte o array em uma string, separando os elementos por " - "
console.log("-".repeat(40))






/*
const letras = ["a", "b", "c", "d"];
const letras2 = letras.slice(-2)//Obtém os dois ultiomos elementos do array
const letras3 = letras.slice(0, -1)//Obtém todos os elementos do array, exceto o último
console.log(letras)
console.log(letras2)
console.log(letras3)

const retira = letras.splice(2,1)//remove a partir da posição 2,  1 elemento
console.log(letras)
console.log(retira)
* */
