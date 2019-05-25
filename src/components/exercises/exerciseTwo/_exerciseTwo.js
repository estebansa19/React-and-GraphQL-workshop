import React from "react";
import FamiliesList from "./FamiliesList";
import { Query } from "react-apollo";
import { FAMILIES } from "../../../queries";

const ExerciseTwo = () => (
  <Query query={FAMILIES}>
    {({ data, loading, error }) => {
      /* Handle your petition behavior */
      if (loading || data.length < 0) return <p>Loading</p>;
      if (error) return <p>Error</p>;
      return <FamiliesList families={data.families} />;
    }}
  </Query>
);

export default ExerciseTwo;
