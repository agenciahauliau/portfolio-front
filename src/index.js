import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri:
      "https://back-portfolio-imb-br-dot-rangell-consultoria-ti.rj.r.appspot.com/v1/graphql",
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
