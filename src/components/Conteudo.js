import React from "react";

//Import Data
import { ImoveisQuery } from './Datas/DataImoveis';

// import GraphQL
import { useQuery } from "@apollo/client";


function Conteudo() {
    
  const { loading, data } = useQuery(ImoveisQuery);
  if (loading) return <p>Loading Masterpieces...</p>;

  return (
    <>
      {data.imoveis.map((imovel) => (
        <p>{imovel._id}</p>
      ))}
    </>
  );
}

export default Conteudo;
