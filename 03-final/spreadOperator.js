let dono = {
    nome: "Lucas Pedroso",
    cpf: "025.232.333-09",
    tel: "(11)9-9999-9999"
}
let pet = {
    nome: "Kaká",
    idade: 7,
    // dono // é igual a escrever dono: dono
    // a forma abaixo não tem o mesmo resutado!
    ...dono // copia as informações de forma independente (desvinculadas da origem)
}
console.log (pet);
// { nome: 'Lucas Pedroso',
//   idade: 7,
//   cpf: '025.232.333-09',
//   tel: '(11)9-9999-9999' }

// spread operator para arrays
let a = [5, 6, 7];
let b = [8, 9, 10];
let c = [...a, ...b];

// spread operator para funções
const somarComMensagem = (msg, ...numeros) => {
    console.log (`Mensagem: ${msg}`);
    console.log (numeros.reduce ((ini, acum) => ini + acum));
};