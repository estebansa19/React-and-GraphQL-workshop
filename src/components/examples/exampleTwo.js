import React from "react";
import { Mutation, Query } from "react-apollo";
import FamiliesForm from "./FamiliesForm";
import { CREATE_FAMILY, FAMILIES } from "../../queries";
import FamiliesList from "./FamiliesList";

const ExampleTwo = () => (
  <Mutation mutation={CREATE_FAMILY}>
    {addFamily => (
      <section className="create-family">
        <FamiliesForm addFamily={addFamily} />
        {/* Watch the families */}
        <Query query={FAMILIES}>
          {({ data, loading, error }) => {
            /* Handle your petition behavior */
            if (error) return <div>Error</div>;
            if (loading) return <div>Loading</div>;
            return <FamiliesList families={data.families} />;
          }}
        </Query>
      </section>
    )}
  </Mutation>
);

export default ExampleTwo;
