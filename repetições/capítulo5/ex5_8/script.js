
const frm = document.querySelector("form");

const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inQuantidade.value);

    const fruta = frm.inFruta.value;

    let c = " "

    for (let i = 1; i <= num; i++) {

        c += fruta + " * ";
        
        resp.innerText = c;
        
    }

})