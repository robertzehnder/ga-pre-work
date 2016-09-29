console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen','king','king'];

var cardsInPlay = [];

//var x =document.getElementById('clearButton');//.addEventListener('click',clearCards());



function createBoard() {

	var board = document.getElementById('game-board');

	for (var i = 0; i< cards.length; i++) {
		
		//Adding the clear div, so that the cards stack in rows of 2

		if (i === 2) {
			var clearDiv = document.createElement('div');
			clearDiv.className = 'clear';
			board.appendChild(clearDiv);
		}

		//create new card

		var newCard = document.createElement('div');
		newCard.className = 'card';

		//setting the attribute of the card to it's spot in the array

		newCard.setAttribute('data-card', cards[i]);

		// when a card is clicked the function isTwoCards will be executed
    	newCard.addEventListener('click', isTwoCards);

    	board.appendChild(newCard);

	}
}

createBoard();


function isTwoCards() {
	
	cardsInPlay.push(this.getAttribute('data-card'));


	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === "king") {
		this.innerHTML = '<img src="pictures/king.png" alt="King of Spades" />';
	}

	else if (this.getAttribute('data-card') === "queen") {
		this.innerHTML = '<img src="pictures/queen.png" alt="King of Spades" />';
	}

  	// if you have two cards in play check for a match
  	if (cardsInPlay.length === 2) {

  	

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);



    // clear cards in play array for next try
    cardsInPlay = [];



  }

  //clearCards(); //Clear pictures from board for retry


}



    


var potato = function clearCards() {

	var cardHolder = document.querySelectorAll(".card");
	
	for (i = 0; i < cardHolder.length; i++) {
		cardHolder[i].innerHTML = "";
	}
}

function isMatch(cardsInPlay) {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}

	else {
		alert("Sorry, not a match...");
	}

}

var button = document.querySelector('button');
	button.addEventListener('click', potato); 

