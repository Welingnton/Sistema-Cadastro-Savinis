var data = new Date();
var dataDoEvento = 12/20/2021
if (dataDoEvento => new Date){
console.log("Evento permitido.")
}else{
    console.log("Evento não permitido, escolha outra data.")
}


var idadeDoParticipante = 20

if (idadeDoParticipante >= 18){
    console.log("Cadastro permitido.")
}else { 
    console.log("Cadastro não permiditido devido á idade")
}


var listaDeParticipantesPalestrantes = ["Welingnton","Caio","Maria","Fabiana"];
var quantidadeDeParticipantesPalestrantes = listaDeParticipantesPalestrantes.length;
console.log(quantidadeDeParticipantesPalestrantes);

if (listaDeParticipantesPalestrantes.length < 100){
    //É possível cadastrar mais participantes
    console.log("Cadastro permitido.")
}else{ 
    console.log("Cadastro não permitido por execeder o limite de participantes")
}








