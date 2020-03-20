const express = require('express');
const router = express.Router();

// requerendo o meu PizzaController
const  PizzaController = require ("../controllers/PizzasController")

// router.get('/', function(req, res) {
//   return res.send('Vários sabores deliciosos de pizza!');
// });

// router.get('/calabresa', function(req, res) {
//   return res.send('Pizza de calabresa!');
// });

router.get('/', PizzaController.listarPizzas);

router.get('/:id', PizzaController.mostrarPizza);

module.exports = router;
