alert("Vamos conhecer sobre vinho!")
alert("Responda as perguntas a seguir digitando a, b ou c")

let branco=0
let rose=0
let tinto=0

let resp1=prompt("O que gosta de comer? \n (a)Peixes \n (b)Massas \n (c)Carne Vermelha")
let resp2=prompt("Você prefere sabores mais suaves? \n (a)Sim \n (b)Mais ou menos \n (c)Não")
let resp3=prompt("Qual característica se sobressai mais da sua personalidade? \n (a)Tranquilidade \n (b)Diversão \n (c)Sabedoria")
let resp4=prompt("Em qual ocasião você degustará o vinho? \n (a)Almoço comemorativo \n (b)Piquenique \n (c)Jantar romântico")
let resp5=prompt("Qual sua estação preferida? \n (a)Verão \n (b)Primavera/Outono \n (c)Inverno")
let resp6=prompt("Qual seu petisco favorito? \n (a)Carpaccio \n (b)Queijos \n (c)Salgados")
let resp7=prompt("Como seria o seu encontro perfeito? \n (a)Fazer uma caminhada ao ar livre \n (b)Assistir a um filme em casa \n (c)Jantar em um restaurante luxuoso")
let resp8=prompt("Qual sobremesa você escolheria? \n (a)Pudim de leite \n (b)Cheesecake de frutas vermelhas \n (c)Fondue de chocolate ao leite")
let resp9=prompt("Qual o país que mais te atrai para visitar? \n (a)Chile \n (b)Itália \n (c)França")
let resp10=prompt("Qual seu estilo de música preferido? \n (a)MPB \n (b)Pop \n (c)Clássica")

//Somas nas variáveis
if(resp1=="a"){
    branco++;
}
else if(resp1=="b"){
    rose++;
}
else if(resp1=="c"){
    tinto++;
}

if(resp2=="a"){
    branco++;
}
else if(resp2=="b"){
    rose++;
}
else if(resp2=="c"){
    tinto++;
}

if(resp3=="a"){
    branco++;
}
else if(resp3=="b"){
    rose++;
}
else if(resp3=="c"){
    tinto++;
}

if(resp4=="a"){
    branco++;
}
else if(resp4=="b"){
    rose++;
}
else if(resp4=="c"){
    tinto++;
}

if(resp5=="a"){
    branco++;
}
else if(resp5=="b"){
    rose++;
}
else if(resp5=="c"){
    tinto++;
}

if(resp6=="a"){
    branco++;
}
else if(resp6=="b"){
    rose++;
}
else if(resp6=="c"){
    tinto++;
}

if(resp7=="a"){
    branco++;
}
else if(resp7=="b"){
    rose++;
}
else if(resp7=="c"){
    tinto++;
}

if(resp8=="a"){
    branco++;
}
else if(resp8=="b"){
    rose++;
}
else if(resp8=="c"){
    tinto++;
}

if(resp9=="a"){
    branco++;
}
else if(resp9=="b"){
    rose++;
}
else if(resp9=="c"){
    tinto++;
}

if(resp10=="a"){
    branco++;
}
else if(resp10=="b"){
    rose++;
}
else if(resp10=="c"){
    tinto++;
}

//Resultados
if (branco>rose && branco>tinto){
    window.location.href = "pages/quizresbranco.html";
}

else if (rose>branco && rose>tinto){
    window.location.href = "pages/quizresrose.html";
}

else{
    window.location.href = "pages/quizrestinto.html";
}