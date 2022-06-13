

let peso = 50;
let listaQtdPecas = 10;
let nomePeca = "Pneu";

if(peso >= 100){
    console.log("Peso da peça possui requisitos para cadastrar");
}else{
    console.log("Peso Insuficiente - não pode cadastrar");
}

if(listaQtdPecas >=10){
    console.log("Não há capacidade na lista: Caixa Lotada!!!");
}

if(nomePeca.length <3){
    console.log("Nome inválido para o cadastro da peça: precisa conter pelo menos 3 caracteres")
}