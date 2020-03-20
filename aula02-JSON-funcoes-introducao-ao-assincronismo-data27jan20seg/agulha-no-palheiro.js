let nome = "Sérgio Moura Brunetti";

console.log (nome.indexOf ("Moura"));
console.log (nome.indexOf ("Mouras")); // -1, pq não existe

// exercício: função deve retornar true se string for encontrada em outra:
function contem (agulha, palheiro) {
    if (palheiro.indexOf (agulha) < 0) { 
        return false;
    } else {
        return true;
    }
}

console.log (contem ("ab", "abelha"));
console.log (contem ("az", "abelha"));

// alternativa com arrow function:
const contemArrowFunction = (agulha, palheiro) => palheiro.indexOf (agulha) > -1;

console.log (contemArrowFunction ("h", "abelha"));
console.log (contemArrowFunction ("z", "abelha"));

// resposta do professor:
function contemOutraResposta (agulha, palheiro) {
    return palheiro.indexOf (agulha) >= 0;
}