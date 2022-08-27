//Questão 2 - Elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 
//Mateus Henrique Pacheco Mascarenhas

const AX2 = document.querySelector("#ax2");
const BX = document.querySelector("#bx");
const C = document.querySelector("#c");
const RESULT = document.querySelector("#resultado");
const BTN = document.querySelector("#Calcular");

// cálculo de Bhaskara
function deltaBhaskara(ax2,bx,c){
    if ((bx**2) - (4*ax2*c) < 0){
        return "Delta é negativo";
    }else{
        let deltaB = (bx**2) - (4*ax2*c);
        return [ (-bx - Math.sqrt(deltaB)) / (2*ax2), (-bx + Math.sqrt(deltaB)) / (2*ax2)];

    }
}

BTN.onclick = ()=>{
   RESULT.innerHTML = deltaBhaskara(AX2.value,BX.value,C.value);
}
