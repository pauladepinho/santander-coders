const somar = (a, b) => a + b;
const diff = (a, b) => a - b;

const operar = (operacao, a, b) => operacao (a, b);

console.log (operar (somar, 4, 5));

// exemplo com setTimout ()
setTimeout (
    () => {console.log ("Hello World!");},
    2000
); // espera 2 segundos para chamar a função de callback