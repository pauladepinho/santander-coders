// ctrl + d - seleciona várias palavras iguais ao mesmo tempo.
// Alt + seta p/ cima - leva linha para cima
let cachorros = [
    {
        nome: "Stark",
        raca: "SRD",
        peso: 13,
        idade: 10,
        cor: "Caramelo",
        porte: "Médio",
        sexo: "M",
        dono: "Thor Odinson",
        alergias: ["Corantes vermelhos", "Frutos do mar"],
        vacinas: [
            {nome: "Antirrábica", data: "10/11/2015"},
            {nome: "BC500", data: "10/12/2015"}
        ],
        castrado: false
    },
    {
        nome: "Sparky",
        raca: "Golden",
        peso: 7,
        idade: 1,
        cor: "Caramelo",
        porte: "Médio",
        sexo: "M",
        dono: "Joana d'Arc",
        alergias: [],
        vacinas: [
            {nome: "Antirrábica", data: "23/02/2019"},
            {nome: "BC500", data: "23/02/2019"}
        ],
        castrado: true
    },
    {
        nome: "Curly",
        raca: "Poodle",
        peso: 3,
        idade: 2,
        cor: "Branco",
        porte: "Pequeno",
        sexo: "F",
        dono: "Ana Maria",
        alergias: [],
        vacinas: [
            {nome: "Antirrábica", data: "23/02/2019"},
            {nome: "BC500", data: "23/02/2019"}
        ],
        castrado: true
    }
];
// Exercício: Escrever função que recebe um número como parâmetro e retornar 
// o nome do cachorro na posição do número e se é castrado ou não.
function informeCastrado (indice) {
    console.log ("nome: " + cachorros[indice].nome);
    // console.log ("Castrado: " + (cachorros[indice].castrado ? "SIM : "NÃO")); // CONDICIONAL TERNÁRIO
    if (cachorros[indice].castrado) {
        console.log ("castrado: SIM");
    }
    else {
        console.log ("castrado: NÃO");
    }
}

for (var i = 0; i < cachorros.length; i++) {
    informeCastrado (i);
}
// Exercício: Imprimir lista com nome dos cachorros castrados.
function listaCastrados () {
    let listaDeCastrados = [];
    for (var i = 0; i < cachorros.length; i++) {
        if (cachorros [i].castrado) {
            listaDeCastrados.push (cachorros [i].nome);
        }
    }
    console.log (listaDeCastrados);
}
listaCastrados ();