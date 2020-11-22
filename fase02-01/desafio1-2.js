// Desafio 01
// Criar objeto empresa exibir dados de endereço na tela

const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260
  }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

//Desafio 02
// Armazene num objeto os dados de um programador, com nome e idade e tecnologias que trabalha. Imprima em tela nome, idade, tecnologia e especialidade.

const programador = {
  nome: "Luiz Furtado",
  idade: 36,
  tecnologias: [
    {
      nome: "Javascript",
      especialidade: "Web/Mobile"
    },
    {
      nome: "Python",
      especialidade: "Data Science"
    }
  ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);