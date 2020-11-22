/*
  Desafios Bootcamp LaunchBase
*/

// Desafio 1 - calculadora de IMC
const nome = "Luiz";
const peso = 72;
const altura = 1.70;

const imc = peso / (altura * altura);

if(imc >= 30) console.log(`${nome}, você esta acima do peso.`);
else console.log(`${nome} você não esta acima do peso.`);

// Desafio 02 - Cálculo de aposentadoria
const sexo = "M";
const idade = 55;
const contribuicao = 40;

if(sexo == "F") {
  if(contribuicao >= 30 && idade + contribuicao >= 85) console.log(`${nome} você pode se aposentar!`);
  else console.log(`${nome} você ainda não pode se aposentar.`)
} else {
  if(contribuicao >= 35 && idade + contribuicao >= 95) console.log(`${nome} você pode se aposentar.`);
  else console.log(`${nome} você ainda não pode se aposentar`);
}