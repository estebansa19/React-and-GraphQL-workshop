import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { CREATE_CHARACTER } from "../../../queries";
import ExampleOne from "../../examples/exampleOne";
import CharacterForm from "./CharacterForm";

const initialState = {
  fields: {
    name: "",
    family: ""
  }
};

class ExerciseFour extends Component {
  state = { ...initialState };

  handleInputChange = ({ target }) => {
    const fields = Object.assign({}, this.state.fields);
    fields[target.name] = target.value;
    this.setState({ fields });
  };

  handleSubmit = (evt, addCharacter) => {
    evt.preventDefault();
    const { name, family } = this.state.fields;
    if (!name || !family) return;
    addCharacter({ variables: { name, familyId: family } });
    this.setState(initialState);
  };

  render() {
    return (
      <section className="create-character">
        <Mutation mutation={CREATE_CHARACTER}>
          {addCharacter => (
            <CharacterForm
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              addCharacter={addCharacter}
              fields={this.state.fields}
            />
          )}
        </Mutation>
        <ExampleOne />
      </section>
    );
  }
}

export default ExerciseFour;
