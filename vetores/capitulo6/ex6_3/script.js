const frm = document.querySelector("form");

const resposta = document.querySelector("h2");

const resposta2 = document.querySelector("p");

const resposta3 = document.querySelector("h3");



const btnAdd = document.getElementById("btAdd");

const btnUrg = document.getElementById("btUrg");

const btnAtend = document.getElementById("btAtend");

//lista de pacientes
const pacientes = [];


//adiciona o paciente a lista de espera
btnAdd.addEventListener("click", (e)=> {
    e.preventDefault()
    const paciente = frm.inName.value
    
    pacientes.push(paciente)// Adiciona o paciente ao final do array pacientes

    //coloca os nomes em fila por ordem de chegada
    resposta.innerText = `Fila de espera: ${ pacientes.join(" - ")} `
    
    //limpa o campo de entrada
    frm.inName.value = ""
    
    
    
})

//coloca o paciente na lista de atendimento
btnAtend.addEventListener('click', (e) => {
e.preventDefault()
    
   let atendimento = pacientes.shift() // Remove o primeiro paciente da fila de espera
    
    resposta3.innerText = `Em Atendimento: ${atendimento}`
    
})