import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { CREATE_CHARACTER } from "../../../queries";
import ExampleOne from "../../examples/exampleOne";
import CharacterForm from "./CharacterForm";

/**
  * Para este último ejemplo agregaremos un nuevo personaje al universo GOT
  * Debes utilizar los valores del formulario para despachar una mutación con ellos
  * Con la mutación CREATE_CHARACTER construiremos el componente que reciba en la render prop
    el metodo para hacer dispatch en el momento que ocurra un submit en el formulario
  * Por ultimo no olvides pasarle al formulario el handleInputChange para que los input se sincronicen
    y el handleSubmit para que el mismo despache la mutación
**/

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
            <CharacterForm  fields={this.state.fields} handleSubmit={this.handleSubmit} addCharacter={addCharacter} handleInputChange={this.handleInputChange}/>
          )}
        </Mutation>
        <ExampleOne />
      </section>
    );
  }
}

export default ExerciseFour;
