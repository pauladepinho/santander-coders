console.log ("Hello World");
// require serve para importar módulo nativos e os que criamos
const test = require ("./test.js") // é convenção usar na constante o mesmo nome do módulo
// import test from "./test.js"; // outra possibilidade
// test.ola ();

const http = require ("http");

const server = http.createServer (function (req, res) {
    // console.log ("Estou dentro do servidor.");
    // console.log (req);
    if (req.url == "/contato") {
        test.ola ();
        return res.end ("Você está na página de contato.");
    }

    console.log ("Página inicial");
    res.end ("Parabéns, você acessou o servidor!");
});

server.listen (3030,"localhost", function () {
    console.log ("Servidor iniciou com sucesso!");
});
// o método listen requer pelo menos 2 parâmetros: porta do servidor e ip do servidor

// o servidor é acessado pelo browser (digitar "localhost:3030", sem aspas, no browser)

// obs.: dns é um apelido dado ao ip do servidor