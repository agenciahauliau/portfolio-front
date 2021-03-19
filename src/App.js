import React from 'react';
import './assets/styles/Import.scss';
import './assets/styles/Fonts.scss';
import './assets/styles/App.scss';
import Conteudo from './components/Conteudo';
import Navbar from './components/Navbar';
import {gql, useQuery} from '@apollo/client'

export const query = gql`
query {
  imoveis{
   _id
   categoriaImovel
 }
}
`


function App() {

  const {loading, data} = useQuery(query)
 
  if (loading) return <p>Loading Masterpieces...</p>


  return (
    <>
      {data.imoveis.map( imovel => (
        <p>{imovel._id}</p>
      ))}
      <Navbar />
      <Conteudo />
    </>
  );
}

export default App;
