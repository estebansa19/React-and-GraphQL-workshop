import React from "react";
import Layout from "./components/Layout";
import "./App.css";

/* Examples */
import ExampleOne from "./components/examples/exampleOne";
/**
  GraphQL Server: https://yoga-got.herokuapp.com
**/

/*
  DOCS:
    - Create client: https://www.apollographql.com/docs/react/essentials/get-started#creating-client
    - Connect your client: https://www.apollographql.com/docs/react/essentials/get-started#creating-provider
  */

/* Apollo imports here */
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

/* Create here the Apollo Client */
const client = new ApolloClient({
  uri: "https://yoga-got.herokuapp.com"
})

const App = () => (
  <ApolloProvider client={client}>
    <Layout>
      <h1 className="main-title">A story of ice and GraphQL</h1>
      {/* Put your current component here! */}
      <ExampleOne />
    </Layout>
    </ApolloProvider>
);

export default App;
