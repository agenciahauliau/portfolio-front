import { gql } from "@apollo/client";

export const infoImoveis = gql`
  query imoveis {
    imoveis {
      _id
      nomeImovel
      imagemPrincipal
      categoriaImovel
      jardins
      descricaoImovel
      tipoNegociacao
      statusLancamento
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
      nomeConstrutora
      bairro
      logradouro
      numeroLogradouro
      complemento
      cep
      cidade
      uf
      galerias {
        tipoGaleria
        nomeGaleria
        arquivos
        arquivoDestaque
      }
      imgPlantaCondominio
      comodidadesImovel
      comodidadesCondominio
      previsaoLancamento
      tipologias {
        quartos
        suites
        tamanho
        valorEntrada
        valorParcela
      }
    }
  }
`;

export const ImoveisPesquisaQuery = gql`
  query imoveis_com_filtro($input: SearchImovelInput, $quantidade: Float) {
    imoveis(filtros: $input, quantidade: $quantidade) {
      _id
      nomeImovel
      imagemPrincipal
      categoriaImovel
      jardins
      descricaoImovel
      tipoNegociacao
      statusLancamento
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
      nomeConstrutora
      bairro
      logradouro
      numeroLogradouro
      complemento
      cep
      cidade
      uf
      galerias {
        tipoGaleria
        nomeGaleria
        arquivos
        arquivoDestaque
      }
      imgPlantaCondominio
      comodidadesImovel
      comodidadesCondominio
      previsaoLancamento
      tipologias {
        quartos
        suites
        tamanho
        valorEntrada
        valorParcela
      }
      createdAt
      updatedAt
    }
  }
`;

export const ImovelQuery = gql`
  query imovel($_id: ID!) {
    imovel(dados: { _id: $_id }) {
      _id
      nomeImovel
      imagemPrincipal
      categoriaImovel
      jardins
      descricaoImovel
      tipoNegociacao
      statusLancamento
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
      nomeConstrutora
      bairro
      logradouro
      numeroLogradouro
      complemento
      cep
      cidade
      uf
      galerias {
        tipoGaleria
        nomeGaleria
        arquivos
        arquivoDestaque
      }
      imgPlantaCondominio
      comodidadesImovel
      comodidadesCondominio
      previsaoLancamento
      tipologias {
        quartos
        suites
        tamanho
        valorEntrada
        valorParcela
      }
      createdAt
      updatedAt
    }
  }
`;
