import React from "react";

// import GraphQL
import { gql } from "@apollo/client";

export const ImoveisQuery = gql`
  query {
    imoveis {
      _id
      categoriaImovel
    }
  }
`;