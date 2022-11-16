// Capítulo 4 ->> OBJETOS

/*
//Aula 9 -> Objetos
//Criação de um OBJETO ATRIBUÍDO À UMA VARIÁVEL chamada curso:
var curso = new Object();

//Definição das propriedades e métodos do obj curso
var curso = {
  titulo: "Javascript: Formação Básica",
  instrutora: "Amanda Cavallaro",
  nivel: "1",
  dataDePublicacao: false,
  numeroDeVisualizacoes: 2,

  //método
  atualizarNumDeVisualizacoes: function () {

    return ++curso.numeroDeVisualizacoes;
      // ++antes -> acrescenta +1 a cada nova visualização co curso
  }
};

console.log(curso);
*/

/* 
//Aula 10 -> Construtor de Objetos -> Possibilita construir NOVOS Objetos
//Definição do Objeto Curso()
function Curso(titulo, instrutora, nivel, dataDePublicacao, numeroDeVisualizacoes, atualizarNumDeVisualizacoes) {
  this.titulo = titulo;
  this.instrutora = instrutora;
  this.nivel = nivel;
  this.dataDePublicacao = dataDePublicacao;
  this.numeroDeVisualizacoes = numeroDeVisualizacoes;
  this.atualizarNumDeVisualizacoes = function(){
    return ++Curso.numeroDeVisualizacoes;
  };
};

//Criação de INSTÂNCIAS do Objeto -> Instância é a CONCRETIZAÇÃO de uma Classe().
// let curso1 = new Curso("Javascript: Formação Básica", "Amanda Cavallaro", "1", false, 5000);
// let curso2 = new Curso("Typescript: Formação Básica", "Amanda Cavallaro", "1", false, 2000);
// let curso3 = new Curso("React: Formação Avançada", "Amanda Cavallaro", "3", false, 10000);

//Populando um array com Instâncias de Curso():
let cursos = [
  new Curso("Javascript: Formação Básica", "Amanda Cavallaro", "1", false, 5000), //cursos[0]
  new Curso("Typescript: Formação Básica", "Amanda Cavallaro", "1", false, 2000), //cursos[1]
  new Curso("React: Formação Avançada", "Amanda Cavallaro", "3", false, 10000), //cursos[2]
];

console.log(cursos[0].titulo);
console.log(cursos[1].instrutora);
console.log(cursos[2].nivel);
console.log(cursos[2].atualizarNumDeVisualizacoes);
*/

/* 
//Aula 12 -> Closures -> É uma função interna, aninhada dentro de outra função
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
function fazerCalculo() {
  var a = 5; //variável local criada pela fazerCalculo()
  var b = 4;
    
  //multiplicarTermos() é uma closure e está disponível apenas dentro do corpo desta função
  function multiplicarTermos() {
    var resultadoMultiplicacao = a * b;   
      //usa as variáveis declaradas na função mãe (não tem variáveis próprias)
    return resultadoMultiplicacao;
  }; 

  return multiplicarTermos;
};

var resultado = fazerCalculo();

console.log("O resultado é : ", resultado());
*/