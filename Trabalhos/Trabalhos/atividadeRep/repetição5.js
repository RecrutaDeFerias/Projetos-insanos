let quantidadeMulta = Number(prompt("Qual é a quantidade de multa que desejas cadastrar?"))
let somaReais = 0
let somaPontos = 0
let somaTotal = 0
for(let quantidadeReais = 0; quantidadeReais <= quantidadeMulta; quantidadeReais++){
    let quantidadeReais = Number(prompt("Digite a quantidade de Reais da multa"))
    let quantidadePontos = Number(prompt("Digite a quantidade de pontos da multa multa"))
    somaReais+= quantidadeReais
    somaPontos+= quantidadePontos
    somaTotalR = somaReais
    somaTotalP = somaPontos
if(somaTotalP >= 21){
  alert(`Você está irregular ${somaTotalP}`)

}
}