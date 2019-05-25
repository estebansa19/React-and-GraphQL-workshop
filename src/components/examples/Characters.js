import React from "react";
import PropTypes from "prop-types";
import { gotClassNames } from "../../utils";

const Character = ({ name, family }) => (
  <li
    className={`characters-list__item ${gotClassNames(
      family.title,
      "characters-list__item"
    )}`}
  >
    <h4 className="characters-list__title">{name}</h4>
  </li>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  family: PropTypes.object.isRequired
};

export default Character;
