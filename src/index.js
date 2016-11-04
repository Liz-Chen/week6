// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY

var hand = deck.splice(0,5);

//var cardImg = React.createClass({
//  render: function() {
//    return(
//      <div className="col-sm-2">
//        <div className="cardImg">
//          <img className="img-responsive" src={this.props.cardMapImg}/>
//        </div>
//      </div>
//    )
//  }
//})

//var fiveCards = deck.splice(0,5)
//fiveCards.forEach(card, index, function(card, index){
//    $("#c#" + (index + 1)).attr("src","http://golearntocode.com/images/cards/" + card] + ".png")
//  }
//})

//var cardImg = React.createClass({
//  render: function() {
//    <div className = "imageVar">
//      <img className="img-responsive" src={this.state.attr("src","http://golearntocode.com/images/cards/" + c1 + ".png")}/>
//    </div>
//  }
//})

//  render: function() {
//    return (
//      <div>
//      <div className="cardsDealt">
//        this.prop.hand.forEach(cards, index, function(hand, index) {
//          this.prop.hand.attr("src","http://golearntocode.com/images/cards/" + hand[index] + ".png")
//        })
//        this.prop.numbers.map(function(number) {
//          return(
//            <cardImg base = {"http://golearntocode.com/images/cards/"}
//                     number = cardsDealt[numbers]
//                     end = {".png"}/>
//          )
//        })
//      </div>
//    )
//  }
//})

var Hand = React.createClass({
  render: function() {
    return(
      <div>
        a new hand
//          {this.props.cards.map(function(cards) {
//            return (
//                <CardImg image = {.poster}
//                 title= {movie.title}
//                 genre= {movie.genre}
//                 runtime= {movie.runtime}/>
//            )
          })}
        </div>
    )
  })


var App = React.createClass({
  dealDeck: function(){
    alert('You clicked it!');
//    var deck = this.state.getDeck().shuffle();
//    <getHand
    this.setState(Hand);
  },
  getInitialState: function() {
    return {cardsDealt: []};
  },
  render: function() {
    var newHand = this.state.cardsDealt;
    newHand.push(<Hand/>);
    this.setState({cardsDealt: newHand});
  },
  render: functon() {
//    <getHand/>,
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <div className="col-sm-2">
            <h1><img className="img-responsive" this.prop.state.attr("src","http://golearntocode.com/images/cards/" + hand[0] + ".png")/></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/ace_of_hearts.png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/ace_of_hearts.png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/ace_of_hearts.png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/ace_of_hearts.png"} /></h1>
          </div>
          <div className="col-sm-2">
            <h1><a href="#" className="btn btn-success" onClick={this.dealDeck}>Deal</a></h1>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
