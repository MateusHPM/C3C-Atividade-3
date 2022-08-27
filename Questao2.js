//Questão 2 - Elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

const ax2 = document.querySelector("#ax2");
const bx = document.querySelector("#bx");
const c = document.querySelector("#c");
const result = document.querySelector("#resultado");
const btn = document.querySelector("#Calcular");

// cálculo de Bhaskara
function deltaBhaskara(ax2,bx,c){
    if ((bx**2) - (4*ax2*c) < 0){
        return "Delta é negativo";
    }else{
        let deltaB = (bx**2) - (4*ax2*c);
        return [ (-bx - Math.sqrt(deltaB)) / (2*ax2), (-bx + Math.sqrt(deltaB)) / (2*ax2)];

    }
}

btn.onclick = ()=>{
   result.value = deltaBhaskara(ax2.value,bx.value,c.value);
}
