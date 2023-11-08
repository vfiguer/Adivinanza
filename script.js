const questions = [
    {
        questio: "Quin pais te mes poblacio",
        respostaCorrecta: "La Xina",
        respostaIncorrecta: "L'India",
    },
    {
        questio: "El primer astyronauta a trepitjar la lluna va ser?",
        respostaCorrecta: "Neil Amstrong",
        respostaIncorrecta: "Louis Amstrong",
    }

];

let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;

const questioProposada = document.getElementById("questioProposada");
const btnEsquerre = document.getElementById("btnEsquerre");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const btnReiniciar = document.getElementById("btnReiniciar");

function barretjaRespostes(correcta, incorrecta) {
    const respostes = [correcta, incorrecta];
    respostes.sort(() => Math.random() - 0.5)
    return respostes;
}

function mostraQuestio() {
    if(indexQuestioActual < questions.length){
        const questioActual = questions[indexQuestioActual];
        questioProposada.textContent = questioActual.questio;
        
        const [barretjarCorrecte, barretjarIncorrecte] = barretjaRespostes(
         questioActual.respostaCorrecta, 
         questioActual.respostaIncorrecta
        );

    btnEsquerre.textContent = barretjarIncorrecte;
    btnDret.textContent = barretjarCorrecte;
    } else {
    //juego acabado
        if(respostesCorrectes === questions.length){
            missatge.textContent = "Has guanyat! Has respost totes les questions correctament";
        } else {
            missatge.textContent = `Joc acabat. respostes correctes: ${respostesCorrectes}, respostes incorrecres: ${respostesIncorrectes}`;
        }

        btnEsquerre.style.display = "none";
        btnDret.style.display = "none";    
        btnReiniciar.style.display = "block";    
    }

 
}  

function comprobaResposta(respostaSeleccionada) {

    const questioActual = questions[indexQuestioActual];

    if(respostaSeleccionada === questioActual.respostaCorrecta){
        respostesCorrectes++;
    } else {
        respostesIncorrectes++;
    }

    indexQuestioActual++;

    mostraQuestio();
}

btnEsquerre.addEventListener("click", ()=> comprobaResposta(btnEsquerre.textContent));
btnEsquerre.addEventListener("click", ()=> comprobaResposta(btnDret.textContent));

btnReiniciar.addEventListener("click", ()=>{
    indexQuestioActual = 0;
    respostesCorrectes = 0;
    respostesIncorrectes = 0;
    missatge.textContent = "";
    btnEsquerre.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostraQuestio();
})

mostraQuestio();

