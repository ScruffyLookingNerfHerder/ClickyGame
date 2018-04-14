import React, { Component } from "react";
import Charactercard from "../Charactercard";
import Wrapper from "../Wrapper";
import Title from "../Title";
import characters from "../../characters.json";
import Characterfield from "../CharacterField";
import AHeader from "../header";



class Game extends Component {
  state = {
    characters
  }

  handleClick = id => {

  // I'm about 1000000% sure there is a clearner way to do this but I don't know what it is
  //create variable for updated array
  let morecharacters =[];
  //loop through data
  const newcharacters = this.state.characters.forEach(character => {
    //find character that was clicked and update clicked key to "true"
    if (character.id === id){
      console.log(character.name)
      character.clicked = "true"

    }
    //put new array in temp variable
    morecharacters.push(character)
  })


  // Set state to temp variable
  this.setState({ characters:morecharacters });
  console.log(this.state)
};


  render() {
    return (

    <Wrapper>
      <AHeader></AHeader>
      <Title> Characters </Title>
      <Characterfield>
      {this.state.characters.map(character => (
        <Charactercard
          image = {character.image}
          handleClick = {this.handleClick}
          id = {character.id}
          name = {character.name}
          />
      ))}
      </Characterfield>

      </Wrapper>
    );
  }
}

export default Game;
