//Questão 01 - Tipos de Triângulo 
//Mateus Henrique Pacheco Mascarenhas

const L1 = document.querySelector("#lado1");
const L2 = document.querySelector("#lado2");
const L3 = document.querySelector("#lado3");
const RESULT = document.querySelector("#resultado");
const BTN = document.querySelector("#verificar");
const AVISO = document.querySelector("#aviso");


BTN.onclick = () =>{
    if (L1.value <= 0 || L2.value <= 0 || L3.value <= 0){ //Verificar se são valores válidos.
        AVISO.innerText = "Tamanho inválido";
        RESULT.value = "";
    }
    else{
        if (L1.value == L2.value && L1.value == L3.value && L2.value == L3.value){
            RESULT.value = "Equilátero";
        }else if (L1.value == L2.value || L1.value == L3.value || L2.value == L3.value){
            RESULT.value = "Isósceles";
        }else{
            RESULT.value = "Escaleno";
        }
        AVISO.innerText = "";
    }
}