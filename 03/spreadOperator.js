let dono = {
    nome: "Lucas Pedroso",
    cpf: "025.232.333-09",
    tel: "(11)9-9999-9999"
}
let pet = {
    nome: "Kaká",
    idade: 7,
    // dono // é igual a escrever dono: dono
    ...dono // copia as informações de forma independente (desvinculadas da origem)
}

console.log (pets)