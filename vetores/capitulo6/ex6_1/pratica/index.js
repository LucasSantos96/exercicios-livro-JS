const frm = document.querySelector("form")

const respNome = document.getElementById('atendimento')

const respLista = document.getElementById('lista')



const pacientes = []

const btUrgencia = document.getElementById('btUrgencia');

frm.addEventListener("submit", (e) => {
     e.preventDefault()

     const nome = frm.inPaciente.value //obtem o nome do paciente

     pacientes.push(nome) //adiciona o nome do paciente no final do vetor

        let lista = '' //string para concatenar pacientes

        // for "tradicional" (inicia em 0, enqnatno i for menor que o tamanho do vetor, incrementa i)
        for(let i = 0; i < pacientes.length; i++) {

            lista += `${i+1}. ${pacientes[i]}\n` //concatena o nome do paciente com o número da posição

        }
    respLista.innerText = lista //exibe a lista de pacientes
    frm.inPaciente.value = '' //limpa o campo de entrada
    frm.inPaciente.focus() //coloca o foco no campo de entrada
})

//Adiciona um "ouvinte" para o evento click bo btnUgencia que está no form

btUrgencia.addEventListener('click', () => {

    //verifica se as validações do form estão ok ( no caso, se o paciente is required)

    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em carácter de urgência")
        frm.inPaciente.focus() //coloca o foco no campo de entrada
        return //interrompe a execução da função
    }

    const nome = frm.inPaciente.value //obtem o nome do paciente
    pacientes.unshift(nome) //adiciona o nome do paciente no início do vetor
    let lista = '' //string para concatenar pacientes

    //foreach aplicado sobre o vetor pacientes
    pacientes.forEach((pacientes, i)=>(lista += `${i+1}. ${pacientes}\n`)) //concatena o nome do paciente com o número da posição
    respLista.innerText = lista //exibe a lista de pacientes
    frm.inPaciente.value = '' //limpa o campo de entrada
    frm.inPaciente.focus() //coloca o foco no campo de entrada

})

frm.btAtender.addEventListener('click', () => {
    //se o tamanho do vetor = 0
    if(pacientes.length === 0) {
        alert("Não há pacientes na fila de espera")
        frm.inPaciente.focus() //coloca o foco no campo de entrada
        return //interrompe a execução da função
    }

    const atender = pacientes.shift() //remove o primeiro paciente do vetor e armazena na variável atender
    respNome.innerText = atender //exibe o nome do paciente atendido
    let lista = '' //string para concatenar pacientes
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`)) //concatena o nome do paciente com o número da posição
    respLista.innerText = lista //exibe a lista de pacientes
})