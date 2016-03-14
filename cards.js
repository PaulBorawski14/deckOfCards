function card(value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

function deck() {
  this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.suits = ['Hearts', '&#9830', 'Spades', 'Clubs'];
  var cards = [];

  for (var s = 0; s < this.suits.length; s++) {
    for (var n = 0; n < this.names.length; n++) {
      cards.push(new card(n+1, this.names[n], this.suits[s]));
    }
  }
  return cards;
}

var myDeck = new deck();
//console.log(myDeck);

window.onload = ()=> {
    console.log(myDeck)
    for (var i = 0; i < myDeck.length; i++) {
      div = document.createElement('div');
      div.className = 'card';

      if (myDeck[i].suit == 'Diamonds') {
        var ascii_char = '&#9830';
      } else {
        var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
        console.log(ascii_char)
       }
      div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
      console.log(div)
      document.body.appendChild(div);

    }
}

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

myDeck = shuffle(myDeck);
