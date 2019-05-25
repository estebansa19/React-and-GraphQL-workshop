import React from "react";
import PropTypes from "prop-types";
import Family from "./Family";

const FamiliesList = ({ families, handleClick, refetch }) => (
  <section className="families-section">
    <ul className="families-section__list">
      {families.map(family => (
        <Family
          handleClick={handleClick}
          key={family.id}
          refetch={refetch}
          {...family}
        />
      ))}
    </ul>
  </section>
);

FamiliesList.propTypes = {
  families: PropTypes.array.isRequired,
  handleClick: PropTypes.func
};

export default FamiliesList;
