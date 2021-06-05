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
      "https://api.portfolio.imb.br/v1/graphql",
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          imoveis: {
            merge: (existing = [], incoming, { args }) => {
              // On initial load or when adding a recipe, offset is 0 and only take the incoming data to avoid duplication
              if (args.offset == 0) {
                return [...incoming];
              }
              // This is only for pagination
              return [...existing, ...incoming];
            },
          },
          leads: {
            merge: (existing = [], incoming, { args }) => {
              // On initial load or when adding a recipe, offset is 0 and only take the incoming data to avoid duplication
              if (args.offset == 0) {
                return [...incoming];
              }
              // This is only for pagination
              return [...existing, ...incoming];
            },
          },
        },
      },
      Imovel: {
        fields: {
          galerias: {
            merge: (existing = [], incoming, { args }) => {
              // On initial load or when adding a recipe, offset is 0 and only take the incoming data to avoid duplication
              if (args.offset == 0) {
                return [...incoming];
              }
              // This is only for pagination
              return [...existing, ...incoming];
            },
          },
          tipologias: {
            merge: (existing = [], incoming, { args }) => {
              // On initial load or when adding a recipe, offset is 0 and only take the incoming data to avoid duplication
              if (args.offset == 0) {
                return [...incoming];
              }
              // This is only for pagination
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);
