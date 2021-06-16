import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QIPesquisa } from "../Dados/DadosImoveis";

export function QParamsImovel() {
  return new URLSearchParams(useLocation().search).get("id");
}

export function QParamsPesquisa() {
  const chaves = new URLSearchParams(useLocation().search);

  let resultado = {};

  for (let key of chaves.keys()) {
    const valorChave = chaves.get(key);

    function test() {
      if (valorChave === "true") {
        return true;
      } else if (valorChave === "false") {
        return false;
      } else if (isNaN(valorChave)) {
        return valorChave;
      } else {
        return +valorChave;
      }
    }
    resultado[key] = test();
    resultado.statusLancamento = "aprovado";
  }
  return resultado;
}

export const toggleClass = (el) => {
  if ( !el.target["clicado"] || el.target["clicado"] === false) {
    el.target["clicado"] = true;
    el.target.parentElement.classList.add("active");
  } else {
    el.target["clicado"] = false;
    el.target.parentElement.classList.remove("active");
  }
};

export function capitalize(str) {
  const ignore = ["de", "da", "das", "do", "dos", "em"];
  let arrWords = str.toLowerCase().split(" ");

  for (const i in arrWords) {
    if (ignore.indexOf(arrWords[i]) === -1) {
      arrWords[i] =
        arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1);
    }
  }
  return arrWords.join(" ");
}
