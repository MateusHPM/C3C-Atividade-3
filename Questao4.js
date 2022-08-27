//Questão - 4 Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.
//Mateus Henrique Pacheco Mascarenhas

const ENTRADA = document.querySelector("#entrada");
const BTN = document.querySelector("#construir");
const RESULT = document.querySelector("#saida");

function LuidyMoura(ENTRADA) {
    let saida = [];
    let cont = 0;
    while (cont < ENTRADA){
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

BTN.onclick = () =>{
    RESULT.innerHTML = LuidyMoura(ENTRADA.value);
}