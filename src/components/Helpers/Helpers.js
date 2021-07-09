import { useLocation } from 'react-router-dom';

export function QParamsImovel() {
	return new URLSearchParams(useLocation().search).get('id');
}

export function QParamsPesquisa() {
	const chaves = new URLSearchParams(useLocation().search);
	let resultado = {};

	for (let key of chaves.keys()) {
		const valorChave = chaves.get(key);
		const VChaves = valorChave.split(',');

		let IN = [];
		for (let VChave of VChaves) {
			IN.push(BSF(VChave));
		}

		resultado[key] = {};
		resultado[key].in = IN;

		resultado.statusLancamento = 'aprovado';
	}

	const { quant, pagina, ...rest } = resultado

	return rest;
}

export const  QuantImoveis = () => {
	const quantImovel = localStorage.getItem("quantImoveis")
	const url = new URL(window.location)
	const quantImovelURL = url.searchParams.get("quant")

	if (quantImovelURL && +quantImovelURL >= 12) {

		localStorage.setItem("quantImoveis", quantImovelURL)
		return +quantImovelURL

	} else if (quantImovel) {

		url.searchParams.set('quant', quantImovel);
		window.history.pushState({}, '', url)
		return +quantImovel

	} else {

		url.searchParams.set('quant', 12);
		window.history.pushState({}, '', url)
		return 12

	}

	
}

export function LinkQuantImoveis() {
	const url = new URL(window.location)
	url.searchParams.delete('quant')
	return url.searchParams.toString()
}

export const  PagImovel = () => {
	const paginaImovel = sessionStorage.getItem("paginaImovel")
	const url = new URL(window.location)
	const paginaImovelURL = url.searchParams.get("pagina")

	if (paginaImovelURL && +paginaImovelURL >= 1) {

		sessionStorage.setItem("paginaImovel", paginaImovelURL)
		return +paginaImovelURL -1

	} else if (paginaImovel) {

		url.searchParams.set('pagina', paginaImovel);
		window.history.pushState({}, '', url)
		return +paginaImovel -1

	} else {

		url.searchParams.set('pagina', 1);
		window.history.pushState({}, '', url)
		return 0

	}
}

export const  Linkdfsdaf = () => {
	const url = new URL(window.location)
	url.searchParams.delete('pagina')
	return url.searchParams.toString()
}


export function BSF(dado) {
	if (dado === 'true') {
		return true;
	} else if (dado === 'false') {
		return false;
	} else if (isNaN(dado)) {
		return dado;
	} else {
		return +dado;
	}
}

export const toggleClass = (el) => {
	if (!el.target['clicado'] || el.target['clicado'] === false) {
		el.target['clicado'] = true;
		el.target.parentElement.classList.add('active');
	} else {
		el.target['clicado'] = false;
		el.target.parentElement.classList.remove('active');
	}
};

export function capitalize(str) {
	const ignore = ['de', 'da', 'das', 'do', 'dos', 'em'];
	let arrWords = str.toLowerCase().split(' ');

	for (const i in arrWords) {
		if (ignore.indexOf(arrWords[i]) === -1) {
			arrWords[i] = arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1);
		}
	}
	return arrWords.join(' ').trim();
}

export const MobileDesktop = /Android (\d+.*)|iPhone OS|iPhoneOS (\d+(?:\_+\d+)+)/.test(navigator.appVersion);

