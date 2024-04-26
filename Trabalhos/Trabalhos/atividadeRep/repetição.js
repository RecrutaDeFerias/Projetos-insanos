let soma = 0

for(let contador = 0; contador <5; contador++){
    let num = Number(prompt('Digite um numero'))
    if (num > 7) {
        soma += num
    }
}
alert(`A soma final é ${soma}`)