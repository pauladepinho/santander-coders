// --------------------EXERCICIO-----------------
// Escrever uma função que retorne o preço de um celular, com a comissão do vendedor(a);
// E que te faça comprar celulares enquanto você tiver dinheiro no banco (saldo); (loops)
// E que você compre acessórios (capinha) se não passar o limite que você quer gastar; (condicional)
// Depois de calcular o preço da compra (celular + capinha) adiciona a comissão para o preço final.
// Checar se o preço final bate cabe no orçamento.

// Você deve declarar constantes para a comissão do vendedor(a); preço do celular e preço da capinha
// usar uma variável para o saldo bancário;
// definir uma função para calcular o preço com a comissão; e formatar o valor com R$/$ -> R$ 100.00;
// arredodar duas casas decimais -> variavel.toFixed (2);

const COMISSAO_VENDEDOR = 0.10;
const PRECO_CELULAR = 99.99;
const PRECO_CAPINHA = 9.99;
const MAXIMO_GASTAR = 137.88;

var saldoBanco = 505.55;
var totalCompra = 0;

function calcularComissao (totalCompra) {
    return totalCompra * COMISSAO_VENDEDOR;
}

function formatarPreco (totalCompra) {
    return "R$" + totalCompra.toFixed (2);
}

while (totalCompra < saldoBanco) {
    totalCompra = totalCompra + PRECO_CELULAR + PRECO_CAPINHA;
}

totalCompra = totalCompra + calcularComissao (totalCompra);

console.log (
    "Sua compra: " + formatarPreco (totalCompra)
);

if (totalCompra > saldoBanco) {
    console.log (
        "Você não pode pagar por esses produtos."
    )
};