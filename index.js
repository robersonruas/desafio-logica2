let nivel = calculaRank(200,6)


function calculaRank(vt,dt){
    let rank = vt - dt
    return rank
}

if (nivel <= 10){
    console.log("O herói tem de saldo de " + nivel + " e está no nível Ferro")
}else if (nivel >= 11 && nivel <=20 ){
    console.log("O herói tem de saldo de " + nivel + " e está no nível Bronze")
}else if (nivel >= 21 && nivel <=50 ){
    console.log("O herói tem de saldo de " + nivel + " e está no nível Prata")
}else if (nivel >= 51 && nivel <=80 ){
    console.log("O herói tem de saldo de " + nivel + " e está no nível Ouro")
}else if (nivel >= 81 && nivel <=90 ){
    console.log("O herói tem de saldo de " + nivel + " e está no nível Diamante")
}else if (nivel >= 91 && nivel <=100 ){
    console.log("O herói tem de saldo de " + nivel + " e está no nível Lendário")
}else {
    console.log("O herói tem de saldo de " + nivel + " e está no nível Imortal")
}