import React from "react";
import { Query } from "react-apollo";
import { CHARACTERS } from "../../queries";
import CharactersList from "./CharactersList";

const ExampleOne = () => (
  <Query query={CHARACTERS}>
    {({ data, loading, error }) => {
      /* Handle your petition behavior */
      if (loading) return <div>Loading</div>;
      if (error) return <div>Error</div>;
      return <CharactersList characters={data.characters} />;
    }}
  </Query>
);

export default ExampleOne;
