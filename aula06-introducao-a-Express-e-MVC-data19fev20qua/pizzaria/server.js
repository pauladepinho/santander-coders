// requerendo o express
const express = require ("express");

// criando o app
const app = express ();

// importando arquivos de rotas
const pizzasRoutes = require ("./routes/pizzasRoutes");

// associando as rotas
app.use ("/pizzas", pizzasRoutes);

app.listen (3000);