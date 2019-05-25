import React from "react";
import PropTypes from "prop-types";
import { gotClassNames } from "../../utils";

const Family = ({ id, title, atWar, handleClick, refetch }) => (
  <li
    className={`families-section__item ${gotClassNames(
      title,
      "families-section__item"
    )} ${atWar ? "families-section__item--atWar" : ""}`}
    onClick={() => {
      if (!handleClick) return;
      handleClick({ variables: { familyId: id } });
      refetch();
    }}
  >
    {title}
  </li>
);

Family.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  atWar: PropTypes.bool.isRequired,
  handleClick: PropTypes.func
};

export default Family;
