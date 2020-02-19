const Pizzas = [
    {
        nome: "Pepperoni",
        igredientes: [
            "muçarela",
            "pepperoni"
        ]
    },
    {
        nome: "Calabresa",
        igredientes: [
            "muçarela",
            "calabresa"
        ]
    }
];

function listarPizzas (req, res) {
    return res.send (Pizzas)
}

function mostrarPizza (req, res) {
    let {id} = req.params;
    
    switch (id) {
        case "1":
            res.send (Pizzas [0]);
            break;
        case "2":
            res.send (Pizzas [1]);
            break;
        default:
            res.send ("Essa pizza não existe");
    }
    // if (id < Pizzas.length) {
    //     return res.send (Pizzas [id]);
   // } else { return res.send ({error: "Pizza não encontrada"})}
}

module.exports = {listarPizzas, mostrarPizza};