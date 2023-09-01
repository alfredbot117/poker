class Deck{
  constructor(){
    this.deck = [];


  }
  makeDeck(){
    let card = (value, suit) =>{
      this.value = value;
      this.suit = suit;
      this.cardName = value + ' of ' + suit;
      return {cardName:this.cardName, suit:this.suit, value:this.value}
    }
    let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    let suites = ['Clubs','Diamonds','Spades','Hearts']

    for(let s=0; s<suites.length; s++){
      for(let v = 0; v<values.length; v++){
          this.deck.push(card(values[v], suites[s]))
      }
    }
  }


  draw(){
    function lastCard(theDeck){
      return theDeck[theDeck.length - 1].value;
    }
    var parent = document.getElementsByClassName('container')[0]
    for(var i = 0; i <2; i++){
      var div = document.createElement("div");
      var nodeValue = document.createTextNode(lastCard(this.deck));
      this.deck.pop();
      div.appendChild(nodeValue);
      div.className = "blank";
      parent.appendChild(div);
    };

    //if(this.deck.length < 1)return document.getElementById("new").innerHTML = 'Out of cards';
    //cardId("value").innerHTML = last(this.deck).value;
    //cardId("suit").innerHTML =  last(this.deck).suit;
    //this.deck.pop();

    //cardId("value2").innerHTML = last(this.deck).value;
    //cardId("suit2").innerHTML = last(this.deck).suit;
    //this.deck.pop();

  }
  shuffle(){
       let currentIndex = this.deck.length, temporaryValue, randomIndex;

      while(0 != currentIndex){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex-=1;
        temporaryValue = this.deck[currentIndex];
        this.deck[currentIndex] = this.deck[randomIndex];
        this.deck[randomIndex] = temporaryValue;

      }

  }
}
//end of classes


function play(){


document.getElementById("new").innerHTML = "new deck made";
deck = new Deck();
deck.makeDeck();
deck.shuffle();

}


function nextCard(){
    deck.draw();


}
