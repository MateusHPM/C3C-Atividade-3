//Questão 3 - Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição.
//Mateus Henrique Pacheco Mascarenhas.

const NOTA = document.querySelector("#nota");
const RESULT = document.querySelector("#resultado");
const BTN = document.querySelector("#verificar");
const AVISO = document.querySelector("#aviso");

BTN.onclick = () => {
    if (NOTA.value < 0 || NOTA.value > 100 || NOTA.value == ""){ //Verificar se preencheu corretamente.
        NOTA.value = "";
        RESULT.value = "";
        AVISO.innerText = "Apenas notas de 0 a 100";
    }
    else{
        if (NOTA.value < 38){  
            RESULT.value = NOTA.value;
            AVISO.innerText = "Reprovado";
        }else if(NOTA.value%5 >= 3){
            RESULT.value = Number.parseInt(NOTA.value) + (5 - Number.parseInt(NOTA.value)%5);//Arredonda para o multiplo de 5 mais próximo.
            AVISO.innerText = "Aprovado";
        }else{
            RESULT.value = NOTA.value;
            AVISO.innerText = "Aprovado";
        }
    }
}