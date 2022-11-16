// Capítulo 4 ->> FUNÇÕES

/* 
//Aula 3 -> Função com Argumentos -> Função reutilizável, melhor manutenção
function findBiggestFraction(a, b) {

  a > b ? console.log("a: ", a) : console.log("b: ", b);

}

const firstFraction = 3/4
const secondFraction = 5/7

findBiggestFraction(firstFraction, secondFraction);
  //Passamos o valor de firstFraction para a, e o valor de secondFraction para b
*/

/* 
//Aula 4 -> Função com retorno de valores(return)
function findBiggestFraction(a, b) {

  let result;

  a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];

  return result;
}

const firstFraction = 3/4
const secondFraction = 5/7

const fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("O resultado da primeira fração é: ", firstFraction);
console.log("O resultado da segunda fração é: ", secondFraction);
console.log("A maior fração é a: " + fractionResult[0] + " com o valor: " + fractionResult[1]);
*/

/*
//Aula 5 -> Funções Anônimas -> precisam estar ligadas à algo: uma variável ou um evento, para serem executadas

const c = 5/7;
const d = 18/25;

const theBiggest = function() {
  let result;

  c > d ? result = ["c", c] : result = ["d", d];
  
  return result;
}

console.log(theBiggest(c,d));

//Ou sem variáveis fora do escopo:
const newBiggest = function (c, d) {
  let result;

  c > d ? result = ["c", c] : result = ["d", d];

  return result;
}

console.log(newBiggest(7/9, 13/25));
console.log(newBiggest); //retorna: [Function: newBiggest]
*/

/* 
//Aula 6 -> Expressão de Função Imediatamente Invocada -> o navegador executa a função quando é encontrada. Seu benefício é ser executada imediatamente onde está localizada no código e produz uma saída diretamente. São ótimas para popular variáveis ou argumentos em uma função maior, assim como uma propriedade em um objeto
const expressaoDeFuncao = (
  function (c, d) {
    let result;

    c > d ? result = ["c", c] : result = ["d", d];

    return result;
  }
)(7/9, 13/25);

console.log(expressaoDeFuncao);


//const nomeVariavel = (funcaoAnonima)(argumento);
//ou seja:
//const nomeVariavel = (function(parametro){bloco de código})(argumento);
*/