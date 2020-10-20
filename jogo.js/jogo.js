var botao1 = document.querySelector("#btn01");
var botao2 = document.querySelector("#btn02");
var texto = document.querySelector("#question01");


function escolha01() {

    texto.textContent = "Quando você chega na box, terão 60 burpees.Vai topar?.";
    botao1.innerHTML = "Vou embora, não sou doida de fazer tanto burpee.";
    botao2.innerHTML = "Vou fazer esses burpees, eu consigo. ";
    botao1.onclick = desistir;
    botao2.onclick = continuar;
    botao2.style.display = "inline-block";
}

function escolha02 (){

    texto.textContent = "Você continua em casa, sem se exercitar e triste.";
    botao1.innerHTML = "Restart";
    botao2.style.display = "none";
    botao1.onclick = escolha01;
}

function desistir (){
    texto.textContent = "Chego em casa, e me sinto muito mal por não ter me desafiado, e começo a comer tudo que vejo pela frente";
    botao2.style.display = "none";
    botao1.innerHTML = "Restart";
    botao1.onclick = escolha01;
}

function continuar(){
    texto.textContent = "Emagreci 10kg";
    botao2.style.display = "none";
    botao1.innerHTML ="Restart";
    botao1.onclick = escolha01;
}