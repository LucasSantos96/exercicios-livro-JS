const frm = document.querySelector('form');
const respErros = document.getElementById('outErros');
const respChances = document.getElementById('outChances');
const respDica = document.getElementById('outDica');


const erros = [];
const sorteado = Math.floor(Math.random()*100) + 1; //sorteia um número entre 1 e 100
const CHANCES = 6; //número de chances

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value) //obtem o número digitado pelo usuário

    if(numero === sorteado) {
        respDica.innerText = `Parabéns! Você acertou o número sorteado: ${sorteado}`;
        frm.btSubmit.disabled = true; //desabilita o botão de submit
        frm.btNovo.className = 'exibe'; //exibe o botão de novo jogo
    }else{
        if(erros.includes(numero)){ //verifica se o número já foi digitado
          alert(`Você já apostou o número ${numero}. Tente outro!`);
    } else {
        erros.push(numero) //adiciona o número digitado no vetor de erros
        const numErros = erros.length; //obtem o número de erros
        const numChances = CHANCES - numErros; //obtem o número de chances restantes

        respErros.innerText = `${numErros} (${erros.join(', ')})`; //exibe os números apostados
        respChances.innerText = numChances; //exibe o número de chances restantes

        if(numChances === 0){
            alert('Suas chances acabaram...')
            frm.btSubmit.disabled = true; //desabilita o botão de submit
            frm.btNovo.className = 'exibe'; //exibe o botão de novo jogo
            respDica.innerText = `Game Over! O número sorteado era ${sorteado}. Tente novamente!`; 
        } else{
            //Usa operador ternário para mensagem de dica 
            const dica = numero < sorteado ? 'O número sorteado é maior.' : 'O número sorteado é menor.';
            respDica.innerText = `Dica: Tente Um número ${dica} que ${numero}`;
        }
    }
}
frm.inNumero.value = ''; //limpa o campo de entrada
frm.inNumero.focus(); //coloca o foco no campo de entrada
    
})
frm.btNovo.addEventListener('click', () => {
    location.reload()   //recarrega a página para reiniciar o jogo
})