import { gql } from "@apollo/client";

export const ImoveisPesquisaQuery = gql`
  query {
    imoveis {
      _id
      categoriaImovel
      jardins
      descricaoImovel
      tipoNegociacao
      statusImovel
      valorImovel
      valorIPTU
      valorCondominio
      andarImovel
      qtdeQuarto
      qtdeBanheiro
      qtdeVagas
      nomeConstrutora
      bairro
      logradouro
      numeroLogradouro
      complemento
      cep
      cidade
      uf
      createdAt
      updatedAt
    }
  }
`;

export const ImovelQuery = gql`
query imovel($id: ID) {
  imovel (dados: {
      _id: $id
  }){
      _id
      categoriaImovel
      jardins
      descricaoImovel
      tipoNegociacao
      statusImovel
      aceitaPermuta
      mobiliado
      valorImovel
      valorIPTU
      valorCondominio
      areaTotal
      areaConstruida
      andarImovel
      qtdeQuarto
      qtdeBanheiro
      qtdeSuites
      qtdeVagas
      nomeConstrutora
      bairro
      logradouro
      numeroLogradouro
      complemento
      cep
      cidade
      uf
      comodidadesImovel
      comodidadesCondominio
      createdAt
      updatedAt
  }
}
`;