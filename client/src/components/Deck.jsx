const Deck = (props) => {
    const width = props.deck.deckConfiguration.width;
    const length = props.deck.deckConfiguration.length;
    return (
      <div id="deck" style={{width:`${width*2.2}em`, height:`${length*2.1}em`}}>
      </div>
    )
  }
  export default Deck;