let pets = require ("./pets.json");

const darBanho = pet => {
    pet.servicos.push ({nome: "banho", data: new Date ()}); // add "banho" a array serviços
    console.log (`Dando banho em ${pet.nome}`); // printa "Dando banho em Nome do Pet"
    return pet; // retorna pet
}

const vacinar = pet => {
    if (!pet.vacinado) { // testa se pet foi vacinado, se não:
        pet.servicos.push ({nome: "vacina", data: new Date ()}); // add "vacina" ao serviço
        pet.vacinado = true; // vacinado true
        console.log (`Vacinando ${pet.nome}`); // printa "Vacinando ${pet}"
    } else { // se sim: printa msg erro
        console.log (pet.nome + "não pode tomar mais vacinas!")
    }
    return pet; // retorna pet
}

const tosar = pet => {
    pet.servicos.push ({nome: "tosa", data: new Date ()});
    console.log (`Tosando ${pet.nome}`);
    return pet;
}

const consultar =  pet => {
    pet.servicos.push ({nome: "consulta", data: new Date ()});
    console.log (`Consultando ${pet.nome}`);
    return pet;
}

const mostrarServico = pet => {
    for (let servico of pet.servicos) {
        if (servico.data) {
            console.log (`${servico.nome}: ${servico.data.toLocaleDateString ()}`);
        } else {
            console.log (`${servico}: DATA INDEFINIDA`);
        }
    }
}

// serv é uma função que realiza um serviço
// sobre o pet (ex.: tosa, vacina, etc.)
const aplicarServico = (pet, serv) => serv (pet);

let thor = pets [1];
darBanho (thor);
vacinar (thor);
aplicarServicos (thor, tosar);


// console.log ("array de pets", pets);
// console.log ("primeiro pet do array", pets [0]);
// let pet = consultar (pets [0]);
// console.log ("pet consultado (pets [0])", pets [0]);
// console.log ("pet consultado (pet)", pet);
// // JSON.stringify (pet)
// pets [0] = pet
// console.log ("array de pets após consulta", pets);

/*
vacinar (pets [0]);

consultar (pets [2]);
vacinar (pets [2]);
darBanho (pets [2]);
tosar (pets [2]);
*/

let fs = require('fs');
fs.writeFile("petsMod.json", pets, err => {
    if (err) {
        console.log(err);
    }
});