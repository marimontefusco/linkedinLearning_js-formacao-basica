// Capítulo 3 ->> ARRAYS

//Aula 8 -> Manipulando arrays
const pens = ["red", "blue", "green", "orange", "gray", "golden"];

console.log("Antes: " + pens);

//PROPRIEDADES:
// Get a property of an object by name ->> array.property ->> pens.length
//console.log(`Array length: ${pens.length}`);

//MÉTODOS
/*
//reverse() ->> reverte a ordem dos elementos do array
pens.reverse();

console.log("Depois: " + pens);
  //Antes: red,blue,green,orange,gray,golden
  //Depois: golden,gray,orange,green,blue,red
*/

/*
//shift() ->> remove o primeiro elemento do array
pens.shift()

console.log("Depois: " + pens);
  //Antes: red,blue,green,orange,gray,golden
  //Depois: blue,green,orange,gray,golden
*/

/* 
//unshift() ->> adiciona um ou mais elementos na começo do array
pens.unshift("purple", "black");

console.log("Depois: " + pens);
  //Antes: red,blue,green,orange,gray,golden
  //Depois: purple,black,red,blue,green,orange,gray,golden
*/

/* 
//pop() ->> Remove o último elemento do array
pens.pop();

console.log("Depois: " + pens);
  //Antes: red,blue,green,orange,gray,golden
  //Depois: red,blue,green,orange,gray
*/

/* 
//push() ->> Adiciona um ou mais elementos no fim do array
pens.push("pink", "silver");

console.log("Depois: " + pens);
  //Antes: red,blue,green,orange,gray,golden
  //Depois: red,blue,green,orange,gray,golden,pink,silver
*/

/* 
//splice() ->> Remove N numeros de elementos começando na (pos)posição especificada 
//pens.splice(pos, N)
pens.splice(3, 2); //Remove 2 itens começando no indice 3

console.log("Depois: " + pens);
  //Antes: red,blue,green,orange,gray,golden
    //      0    1    2     3     4     5
  //Depois: red,blue,green,golden
*/

/* 
//slice() ->> Cria uma cópia identica de um array já existente -> necessário atribuir o novo array numa nova variável
const newPens = pens.slice();

console.log("Array pens: ", pens);
console.log("Array newPens: ", newPens);
  //Array pens: ['red', 'blue', 'green', 'orange', 'gray', 'golden']
  //Array newPens: ['red', 'blue', 'green', 'orange', 'gray', 'golden']
  //Mesmo resultado, porém arrays diferentes
*/

/* 
//indexOf() -> Retorna o primeiro elemento encontrado depois da posição do indice(index) especificado através do parâmetro pesquisado(pesquisa)
//se nenhuma posição de index for especificada, ele começa pelo index 0
//indexOf(pesquisa, index)
const result = pens.indexOf("orange", 2);//pesquise por "orange" a partir do índice 2

console.log("O índice do elemento pesquisado é: ", result);
  //Antes: red, blue, green, orange, gray, golden
  //O índice do elemento pesquisado é: 3
*/

/* 
//join() ->> Retorna uma cópia de um array já existente, transforma os elementos em "strings" separados por VIRGULAS -> necessário atribuir o novo array numa nova variável
const arrayString = pens.join();

console.log("Strings do array pens: ", arrayString);
  //Antes: red,blue,green,orange,gray,golden
  //Strings do array pens: red, blue, green, orange, gray, golden

//join(separadorDesejado) -> Possibilita alterar o separador dos elementos em "-" "/" "*" ->> join("-")
const stringComSeparador = pens.join("-")

console.log("Strings com outro separador: ", stringComSeparador);
  //Antes: red,blue,green,orange,gray,golden
  //Strings com outro separador:  red-blue-green-orange-gray-golden
*/

//MDN Documentation for Array:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array