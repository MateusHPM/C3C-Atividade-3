//Questão 01 - Tipos de Triângulo

const l1 = document.querySelector("#lado1");
const l2 = document.querySelector("#lado2");
const l3 = document.querySelector("#lado3");
const result = document.querySelector("#resultado");
const btn = document.querySelector("#verificar");


btn.onclick = () =>{
    if (l1.value == l2.value && l1.value == l3.value && l2.value == l3.value){
        result.value = "Equilátero";
    }else if (l1.value == l2.value || l1.value == l3.value || l2.value == l3.value){
        result.value = "Isósceles";
    }else{
        result.value = "Escaleno";
    }
}