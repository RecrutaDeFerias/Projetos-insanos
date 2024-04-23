let tempoMusica, nomeMusica
let totalTempo = 0
let horas = 0, minutos=0
do{
    tempoMusica=Number(prompt('Tempo da musica'))
    console.log(tempoMusica)
    if(tempoMusica > 0)
    nomeMusica = prompt("nome da Musica")
    totalTempo += tempoMusica

}while(tempoMusica!=0);

console.log("Soma dos tempos: " + totalTempo);

while(totalTempo >= 60){
    totalTempo -= 60;
    horas++
}
minutos = totalTempo
console.log(horas + ';' + minutos)