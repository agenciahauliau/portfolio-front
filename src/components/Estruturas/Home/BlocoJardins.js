import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QIPesquisa } from "../../Dados/DadosImoveis";

function BlocoJardins() {
  const { loading, data } = useQuery(QIPesquisa, {
    variables: {
      input: {
        jardins: true,
        categoriaImovel: "Lote em Condomínio",
      },
    },
    returnPartialData: true,
  });

  const [state, setImoveis] = useState([]);

  useEffect(() => {
    let tempVar = [];
    if (data) {
      data.imoveis?.forEach((i) =>
        tempVar.push(i.nomeImovel.replace(/\s\s/g, " "))
      );

      const result = tempVar.reduce(
        (json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }),
        {}
      );

      const result2 = Object.entries(result).sort((a, b) => b[1] - a[1]);

      setImoveis(result2.slice(0, 5));

      console.log(result2);
    }
  }, [data]);

  if (loading) return "loading";

  return <div></div>;
}

export default BlocoJardins;