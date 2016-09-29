console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen','king','king'];

var cardsInPlay = [];


function createCards() {
	
	var board = document.getElementById('game-board');


	for (i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		board.appendChild(newCard);

	}

}

createCards();

function createBoard() {

	for (var i = 0; i< cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);

		// when a card is clicked the function isTwoCards will be executed
    	cardElement.addEventListener('click', isTwoCards);

		cardElement.innerHTML = '<img src="pictures/king.png" alt="King of Spades" />';


	}
}

createBoard();

function isMatch() {
	
	if (cardOne === cardFour) {
		alert("You found a match!");
	}

	else {
		alert("Sorry, not a match...");
	}

}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}
