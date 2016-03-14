const n = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const suit = ['Hearts', '&#9830', 'Spades', 'Clubs']

function cards () {
  var i = 4, o = []
  while (i--)
    n.map( n => o.push( n + suit[i]) )
  return o
}
