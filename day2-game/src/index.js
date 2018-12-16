var Game = (function () {
    function Game(gameContainer) {
        this.gameContainer = gameContainer;
        this.deckOfCards = [
            {
                id: 0,
                front: 'A',
                complete: false,
                visible: false,
            },
            {
                id: 1,
                front: 'A',
                complete: false,
                visible: false,
            },
            {
                id: 2,
                front: 'B',
                complete: false,
                visible: false,

            },
            {
                id: 3,
                front: 'B',
                complete: false,
                visible: false,
            },
            {
                id: 4,
                front: 'C',
                complete: false,
                visible: false,
            },
            {
                id: 5,
                front: 'C',
                complete: false,
                visible: false,
            },
        ];
    }
    Game.prototype.render = function () {
        this.gameContainer.innerHtml = '';

        this.deckOfCards.forEach(function (card) {
            var cardElement = document.createElement('div');
            cardElement.innerHTML = card.front;

            cardElement.classList.add('card'); //tworzymy klasę 

            this.gameContainer.appendChild(cardElement); //dodajemy klasę 

            cardElement.addEventListener('click', function(){
                console.log(this)
                
            }.bind(this))

            // console.log(this);
            // console.log(card);
        }, this);
    }

    Game.prototype.init = function () {
        this.render();
    }

    return Game
})()

var newGame = new Game(document.querySelector('#game-container'));

newGame.init();

console.log(newGame)


