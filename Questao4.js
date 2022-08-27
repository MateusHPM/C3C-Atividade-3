//Questão - 4 Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.

const entrada = document.querySelector("#entrada");
const btn = document.querySelector("#construir");
const seq = document.querySelector("#sequencia");
const result = document.querySelector("#saida");

function LuidyMoura(entrada) {
    let saida = [];
    let cont = 0;
    while (cont < entrada){
        saida[cont] = cont+1;
        if ( saida[cont]%5 == 0 && saida[cont]%9 == 0 ){
            saida[cont] = "LuidyMoura";
        }else if( saida[cont]%5 == 0 ){
            saida[cont] = "Luidy";
        }else if( saida[cont]%9 == 0 ){
            saida[cont] = "Moura";
        }
        cont += 1;
    }
    return saida;
}

btn.onclick = () =>{
    seq.innerHTML = "A sequência é:"
    result.innerHTML = LuidyMoura(entrada.value);
}