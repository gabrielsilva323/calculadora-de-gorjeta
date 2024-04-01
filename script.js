let conta = 0
let pessoas = 0
let porcentagem = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input", recebervalorconta)

function recebervalorconta(evento) {
    conta = Number(evento.target.value)
}

const pessoasinput = document.querySelector("#pessoas")
pessoasinput.addEventListener("input", receberquantidadepessoas)

function receberquantidadepessoas(evento) {
    const paragrafoerro = document.querySelector(".pessoas #erro")
    const diverro = document.querySelector(".pessoas  .input-box")
 
    if(evento.target.value === "0") {
     paragrafoerro.style.display = "block"
     diverro.setAttribute("id", "erro-div")
   } else {
    paragrafoerro.style.display = "none"
    diverro.setAttribute("id", "")
    pessoas = Number(evento.target.value)
   }
}


const botoesgorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesgorjeta.forEach(botao => {
    botao.addEventListener("click", receberporcentagem)
})

function receberporcentagem(evento) {
 console.log(evento.target.value)   
}