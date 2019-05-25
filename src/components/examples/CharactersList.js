import React from "react";
import PropTypes from "prop-types";
import Character from "./Characters";

const CharactersList = ({ characters }) => (
  <ul className="characters-list">
    {characters.map(character => (
      <Character key={character.id} {...character} />
    ))}
  </ul>
);

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharactersList;
