

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...")
    
    let adultos = inputAdultos.value;
    let ceiancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * ceiancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = criancasaPP(duracao) * adultos + (criancasaPP(duracao) /2  * ceiancas);

   resultado.innerHTML = '<p>'+qtdTotalCarne /1000 +' Kg de carne </p>'
   resultado.innerHTML += '<p>'+ Math.ceil(qtdTotalCerveja / 355)+' Latas de cerveja </p>'
   resultado.innerHTML += '<p>'+Math.ceil(qtdTotalBebidas / 200) +' Garrfas de 2 litos de Bebida </p>'

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650
    }else{
        return 400;
    }
}
function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}
function criancasaPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}