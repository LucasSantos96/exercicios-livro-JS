const cidades = ["Pelotas"]

cidades.push("Rio Grande");// Adiciona Rio Grande ao final do array

cidades.unshift("Porto Alegre");// Adiciona Porto Alegre ao início do array

const ultima = cidades.pop();// Remove o último elemento do array e o retorna

const primeira = cidades.shift();// Remove o primeiro elemento do array e o retorna

console.log(cidades);// Exibe o array atualizado