var pregunta = prompt("Ingresa tu opcion: Piedra, papel o tijera");
var user = pregunta.toLowerCase();
var opcion = ["piedra", "papel", "tijera"];
var machine = opcion[Math.floor(Math.random() * 3)]

var game = function result(user, machine) {
    switch (user) {
        case machine:
            console.log("tie, play again", user, machine)
            break;
        case "piedra":
            if (machine === "papel") {
                console.log("Machine Win", user, machine)
            } else {
                console.log("User Wins", user, machine)
            }
            break;
        case "tijera":
            if (machine === "piedra") {
                console.log("Machine Win", user, machine)
            } else {
                console.log("User Wins", user, machine)
            }
            break;
        case "papel":
            if (machine === "tijera") {
                console.log("Machine Win", user, machine)
            } else {
                console.log("User Wins", user, machine)
            }
            break;
        default:
            console.log("Nobody Wins")
            break;
    }
}
game(user, machine);
