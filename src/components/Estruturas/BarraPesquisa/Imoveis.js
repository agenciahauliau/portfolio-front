import React, {useState} from "react";
import { useImoveisContext } from "./BarraPesquisa";

import Item from "./Item";


const ImovelContext = React.createContext();

export default function ImoveisContextProvider({ children }) {
  const { data, loading } = useQuery(infoImoveis);
  return (
    <ImovelContext.Provider
      value={{
        imoveis: {
          itens: data ? data.imoveis : [],
          loading
        }
      }}
    >
      {children}
    </ImovelContext.Provider>
  );
}

export function useImoveisContext() {
  return useContext(ImovelContext);
}



const ContainerImoveis = ({ children }) => (
  <div className="imoveis">{children}</div>
);

function Contatos() {
  //const [isTrusted, setActive] = useState(false);
  const toggleClass = (el) => {
    if (el.target['clicado'] === true) {
      el.target['clicado'] = false
      el.target.classList.add('true')
    } else {
      el.target['clicado'] = true;
      el.target.classList.remove('true')
    }
  };

  const { imoveis } = useImoveisContext();

  if (imoveis.loading)
    return <ContainerImoveis>Carregando...</ContainerImoveis>;

  let cidades = [];

  for (let Imovel of imoveis.itens) {
    Imovel.cidade && cidades.push(Imovel.cidade.trim().toLowerCase());
  }

  function capitalize(str){
    const ignore = ['de', 'da', 'das', 'do', 'dos'];
    let arrWords = str.toLowerCase().split(' ');

    for (const i in arrWords) {
      if (ignore.indexOf(arrWords[i]) === -1) {
        arrWords[i] = arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1);
      }
    }
    return arrWords.join(' ');
  }

  return (
    <ContainerImoveis>
      <div className="test">
        {[...new Set(cidades)].map((cidade, i) => (
          <p key={i}
          id={i}
          className="itamar"
          onClick={toggleClass}>
            {capitalize(cidade)}
          </p>
        ))}
      </div>
    </ContainerImoveis>
  );
}

export default Contatos;
