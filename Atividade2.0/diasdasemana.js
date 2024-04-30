let diaDaSemana = ["Segunda", "Terça", "Quarta", "Quita", "Sexta", "Sabado", "Domingo"]

diaDaSemana[6] = "Melhor dia"
console.log(diaDaSemana);

diaDaSemana.plush("Feriado")
console.log(diaDaSemana);
console.log("Acrescentando elemento: ");
console.log(diaDaSemana);

diaDaSemana.unshift("Semana 1: ")
console.log("Acrescentando elemento no inicio com unshift");
console.log(diaDaSemana);

diaDaSemana.pop()
console.log("Removendo elemento do final com pop");
console.log(diaDaSemana);

diaDaSemana.shift()
console.log("Removendo o primeiro com shift");
console.log(diaDaSemana);