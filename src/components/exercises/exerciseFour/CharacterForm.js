import React from "react";
import { Query } from "react-apollo";
import { FAMILIES } from "../../../queries";

const CharacterForm = ({
  addCharacter,
  fields,
  handleInputChange,
  handleSubmit
}) => (
  <form
    className="create-form create-form--character"
    onSubmit={evt => handleSubmit(evt, addCharacter)}
  >
    <label className="create-form__label">Name</label>
    <input
      onChange={handleInputChange}
      type="text"
      name="name"
      className="create-form__input"
      value={fields.name}
    />
    <label className="create-form__label">Family</label>
    <select
      className="create-form__select"
      value={fields.family}
      onChange={handleInputChange}
      name="family"
    >
      <option className="create-form__option">Choose one family</option>
      <Query query={FAMILIES}>
        {({ data, loading, error }) => {
          if (loading) return <option>Loading</option>;
          if (error) return <option>Error</option>;
          return data.families.map(family => (
            <option
              key={family.id}
              className="create-form__option"
              value={family.id}
            >
              {family.title}
            </option>
          ));
        }}
      </Query>
    </select>
    <button type="submit" className="create-form__submit">
      Add
    </button>
  </form>
);

export default CharacterForm;
