//Questão 3 - Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição.


const nota = document.querySelector("#nota");
const result = document.querySelector("#resultado");
const btn = document.querySelector("#verificar");
const aviso = document.querySelector("#aviso");

btn.onclick = () => {
    if (nota.value < 0 || nota.value > 100 || nota.value == ""){ //verificar se preencheu corretamente
        nota.value = "";
        result.value = "";
        aviso.innerText = "Apenas notas de 0 a 100";
    }
    else{
        if (nota.value < 38){  
            result.value = nota.value;
            aviso.innerText = "Reprovado";
        }else if(nota.value%5 >= 3){
            result.value = Number.parseInt(nota.value) + Number.parseInt((5-nota.value%5));
            aviso.innerText = "Aprovado";
        }else{
            result.value = nota.value;
            aviso.innerText = "Aprovado";
        }
    }
}