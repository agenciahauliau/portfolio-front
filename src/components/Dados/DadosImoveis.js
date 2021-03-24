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
      aceitaPermuta
      mobiliado
      valorImovel
      valorEntrada
      valorParcela
      valorIPTU
      valorCondominio
      areaTotal
      areaConstruida
      andarImovel
      qtdeQuarto
      qtdeBanheiro
      qtdeSuites
      qtdeVagas
      nomeImovel
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

export const ImovelQuery = gql`
query imovel(
    $_id: ID!
  ) {
    imovel(
      dados: {
        _id: $_id
      }
    ) {
      _id
      categoriaImovel
      jardins
      descricaoImovel
      tipoNegociacao
      statusImovel
      aceitaPermuta
      mobiliado
      valorImovel
      valorEntrada
      valorParcela
      valorIPTU
      valorCondominio
      areaTotal
      areaConstruida
      andarImovel
      qtdeQuarto
      qtdeBanheiro
      qtdeSuites
      qtdeVagas
      nomeImovel
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
  }`
  ;