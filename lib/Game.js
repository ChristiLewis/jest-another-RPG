//REMEMBER TO INSTALL INQUIRER FROM THE COMMAND LINE AND ADD INSTRUCTIONS IN THE README FILE
const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    //ADD GAME OBJECT PROPERTIES
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

//ADD INITIALIZEGAME() METHOD
Game.prototype.initializeGame = function() {
    
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('ord', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

    this.currentEnemy = this.enemies[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        //DESTRUCTURE NAME FROM PROMPT OBJECT
        .then(({ name}) => {
            this.player = new Player(name);
            // TEST THE OBJECT CREATION console.log(this.currentEnemy, this.player);
            this.startNewBattle();
        });
};
module.exports = Game;