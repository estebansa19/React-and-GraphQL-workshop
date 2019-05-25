import { gql } from "apollo-boost";

export const FAMILIES = gql`
  query {
    families {
      id
      title
      atWar
    }
  }
`;

export const CHARACTERS = gql`
  query {
    characters {
      id
      name
      family {
        id
        title
        atWar
      }
    }
  }
`;

export const CREATE_FAMILY = gql`
  mutation($title: String!) {
    createFamily(title: $title) {
      title
    }
  }
`;

export const SEND_AT_WAR = gql`
  mutation($familyId: ID!) {
    sendToWar(familyId: $familyId) {
      id
      title
      atWar
    }
  }
`;

export const CREATE_CHARACTER = gql`
  mutation($name: String!, $familyId: ID!) {
    createCharacter(name: $name, house: "", familyId: $familyId) {
      id
      name
    }
  }
`;
