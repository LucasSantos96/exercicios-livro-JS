const frm = document.querySelector('form');

const resp = document.querySelector('h3');
const resp2 = document.querySelector('h4');



frm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const num = Number(frm.inNumero.value);
    
    let divisores = []
    
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisores.push(i);

            let soma = divisores.reduce((a, b) => a + b, 0);

            resp.innerHTML = `Os divisores de ${num} são: ${divisores.join(', ')} soma: ${soma}`;

            if (soma === num) {

            resp2.innerHTML = `\n ${num} é um número perfeito`;

        }else{
            
            resp2.innerText = `${num} não é um número perfeito`;
        }
    }
}
})
    