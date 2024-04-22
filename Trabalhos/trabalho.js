let numero = Number(prompt("Digite o seu numero:"))
let i
let primo = true

i=2
while (i < numero){
    if(numero % i == 0){
        primo = false
    }
    i++
}
if(primo){
    alert("É primo")
}else{
    alert("Não é primo")
}
