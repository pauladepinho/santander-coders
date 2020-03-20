// filter () e JSON
// filter () recebe uma função que retorna true ou false
// para cada elemento de um array e compõe outro array
// sem os elementos que retornaram false para a função callback

// exercício:
// buscarPorNome ("at");
// retornar um array com os cachorros que tem "at" no nome

/*
// TESTE:
let cachorros = ["Atila", "Rex", "Safira", "Batman"];
const buscarPorNome = cachorro => cachorro.toLowerCase ().indexOf ("at") > -1;
console.log (cachorros.filter (buscarPorNome));
*/

// RESOLUÇÃO:

/*
// requisitando o objeto fs
// (file system: obj nativo do node, uma biblioteca, que manipulado arquivos):
let fs = require ("fs");

// lendo o arquivo pets.json e armazenando em string:
let stringJson = fs.readFileSync ("pets.json", "utf-8");
//console.log (stringJson);

// transformar a string JSON em objeto literal:
let cachorros = JSON.parse (stringJson);
*/
// outra forma de fazer:
let cachorros = require ("./pets.json");

const contemArrowFunction = (agulha, palheiro) => palheiro.indexOf (agulha) > -1;

const buscarCachorroPorNome = trecho => {
    let resultado = cachorros.filter (c => { // c representa cada elemento do array
        return contemArrowFunction (trecho, c.nome);
    });
    return resultado;
}

console.log (buscarCachorroPorNome ("At"));

// exercício 2: cachorros castrados
const buscarCastrado = /*() => */cachorros.filter (c => c.castrado);

console.log (buscarCastrado /*()*/);