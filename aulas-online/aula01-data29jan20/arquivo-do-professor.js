//  TIPOS DE VARIAVEL!
const COISASQUENAOMUDAM = true;
// const COISASQUENAOMUDAM = false;
// console.log(COISASQUENAOMUDAM);
var contaBancaria = 1000;

let saldo = 50;;

// TIPOS DE DADOS;
// booleanos; que eles sempram retornam verdadeiro (true) ou falso (false);
let nasceuNoBrasil = true;
// STRINGS; bloco de texto;
let str = "Oi eu sou o Gabriel";
//         0123456789;
// OBJETOS LITERAIS
let cachorro = {
    nome: "Stark",
    raça: "SRF"
}

// OBJETO a gente acessa os dados; com nomeDoObjeto.nomeDoDado;
cachorro.nome;
cachorro.raça;

// Array
let alunos = ["João","Pedro","Paula"];
//              0        1      2

// --------------------EXERCICIO-----------------
// Escrever uma função que retorne o preço de um celular, com a comissão do vendedor(a);
// E que te faça comprar celulares enquanto você tiver dinheiro no banco (saldo); (loops)
// E que você compre acessórios (capinha) se não passar o limite que você quer gastar; (condicional)
// Depois de calcular o preço da compra (celular + capinha) adiciona a comissão para o preço final.
// Checar se o preço final bate cabe no orçamento.

// Você deve declarar constantes para a comissão do vendedor(a); preço do celular e preço da capinha
// usar uma variável para o saldo bancário;
// definir uma função para calcular o preço com a cmoissão; e formatar o valor com R$/$ -> R$ 100.00;
// arredondar duas casas decimais -> variavel.toFixed (2);

// DESAFIO DO SÉRGIO:
// retornar o valor decimal com o separador com vírgula! R$ 100,00


// RESOLUCAO GABREIL------------------------------------------------
console.log(totalCompra);

const COMISSAO_VENDEDOR = 0.1;
const PRECO_CELULAR = 99.99;
const PRECO_CAPINHA = 9.99;
const MAXIMO_GASTAR = 137.88;

// VARIAVEIS COM VAR PODEM SER CHAMADAS EM TODO O CÓDIGO
var saldoBanco = 505.55;
// VARIAVEIS COM LET SÓ PODEM SER CHAMADAS NAS LINHAS ABAIXOS
let totalCompra = 0;


// QUANDO USAMOS ARROW FUNCTIONS PARA DECLARAR FUNÇÔES ELA SO FICA DISPONIVEL
// NAS LINHAS ABAIXO DA FUNCAO DECLARADA
// const calcularComissao = (valor) =>{
//     return valor * COMISSAO_VENDEDOR;
// }

// QUANDO USAMOS FUNCTIONS PARA DECLARAR FUNÇÕES ELA SE TORNA DISPONÍVEL
// EM TODO O SEU CÓDIGO!
function calcularComissao(valor) {
    return valor * COMISSAO_VENDEDOR;
}

function formatarPreco (valor) {
    return "R$ " + valor.toFixed(2);
}

// continuar comprando celular enquanto tiver dinheiro!!!
while (totalCompra < saldoBanco) {
    // comprar um novo telefone e capinha
    totalCompra = totalCompra + PRECO_CELULAR + PRECO_CAPINHA;
}

// não se esqueça do vendedor
totalCompra = totalCompra + calcularComissao(totalCompra);

console.log (
    "Sua compra: " + formatarPreco(totalCompra)
);
// Sua compra: R$ totalCompra;

// Você pode pagar essa compraw
if ( totalCompra > saldoBanco){
    console.log (
        "Você não pode pagar por esses produtos :("
    );
}
// Você naõ pode pagar por esses produtos :(


// RESOLUÇÂO PEDRO (retornar valor decimal):
// let valor = 4.58;

// function converterParaReal(valorComPonto){
//     return valorComPonto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
// };

// console.log(converterParaReal(4.58));

// COMO USAR INPUTS DO USUÁRIO
// https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// })





