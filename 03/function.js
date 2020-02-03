function aoQuadrado (x) {
    return x ** 2;
    // return Math.pow (x, 2);
    // return x * x; // a pior opção
}
const aoQuadradoAF = x => x ** 2;

let numeros = [5, 6, 7, 8];
let quadrados = numeros.map (aoQuadrado); // geralmente a função é declarada dentro
let produto = numeros.reduce ((acumulador, valorAtual) => acumulador * valorAtual); 

console.log (aoQuadrado (5));
console.log (aoQuadradoAF (3));
console.log (quadrados); // [25, 36, 49, 64]
console.log (produto);