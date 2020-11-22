const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for(let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`);
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}

function checaSeUsuarioUsaCSS(usuario) {
  for(let i = 0; i < usuario.tecnologias.length; i++) {
    if(usuario.tecnologias[i] === "CSS") return true;
  }

  return false;
}

const clientes = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

function calculaSaldo(receitas, despesas) {
  return receitas - despesas;
}

function somaValores(numeros) {
  let total = 0;

  for(let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }

  return total;
}

for (let i = 0; i < clientes.length; i++) {
  let receitas = somaValores(clientes[i].receitas);
  let despesas = somaValores(clientes[i].despesas);
  let saldo = calculaSaldo(receitas, despesas);
  let situacao = "";

  if(saldo > 0) situacao = "POSITIVO";
  else situacao = "NEGATIVO";

  console.log(`${clientes[i].nome} possui saldo ${situacao} de ${saldo}`);
}