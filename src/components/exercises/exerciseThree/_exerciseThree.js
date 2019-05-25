import React from "react";
import { Query, Mutation } from "react-apollo";
import { FAMILIES, SEND_AT_WAR } from "../../../queries";
import FamiliesList from "../exerciseTwo/FamiliesList";

const ExerciseThree = () => (
  <Query query={FAMILIES}>
    {({ data, loading, error, refetch }) => {
      if (error) return <div>Error</div>;
      if (loading) return <div>Loading</div>;
      return (
        <Mutation mutation={SEND_AT_WAR}>
          {sendAtWar => (
            <FamiliesList
              handleClick={sendAtWar}
              refetch={refetch}
              families={data.families}
            />
          )}
        </Mutation>
      );
    }}
  </Query>
);

export default ExerciseThree;
