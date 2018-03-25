var Game = require("./game.js");

var game = new Game();

game.startGame();
game.showCoin();

document.addEventListener('keydown', function(event) {
    game.turnFurry(event);
});