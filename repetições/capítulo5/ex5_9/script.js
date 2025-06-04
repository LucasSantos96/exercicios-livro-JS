const frm = document.querySelector("form");
const resp = document.querySelector("h3");





frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const chinchilas = Number(frm.inChinchilas.value); // Lê o número de chinchilas digitadas pelo usuário

    const ano = Number(frm.inAno.value); // Lê o número de anos digitados pelo usuário

    let previsao = chinchilas; // Inicializa a previsão com o número de chinchilas digitadas

    let resultado = ""; // acumula o resultado a ser exibido

    //Enquanto i for menor ou igual ao ano digitado o loop irá rodar até o ano digitado
   for (let i = 1; i <= ano; i++) {

        // A cada iteração, adiciona o número de chinchilas previstas para aquele ano ao resultado
       resultado += `${i}º ano: ${previsao} chinchilas\n`;
       
       
       // A cada iteração, multiplica a previsão por 3 (pois as chinchilas triplicam a cada ano)
        previsao *= 3;
    }

    resp.innerText = resultado;


})