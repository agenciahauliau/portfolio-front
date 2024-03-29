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

		if(typeof(BSF(IN[0])) === 'number'){
			resultado[key] = {gte:IN[0],lte:IN[1]}
		} else if (typeof(BSF(IN[0])) === 'string'){
			resultado[key].in = IN
		} else {
			resultado[key] = IN
		}
		
		resultado.statusLancamento = 'aprovado';
	}

	const { quant, pagina, ...rest } = resultado
	return rest;
}

export function queryURL() {
	let url = new URL(window.location);
	const resultadoUrl = []
	for (let keys of url.searchParams.entries()) {
		resultadoUrl[keys[0]] = keys[1].split(',')
	}
	return resultadoUrl
}

export function CriaInputURL() {
	let url = new URL(window.location);
	const inputURL = []
	for (let keys of url.searchParams.entries()) {
		if (keys[0] !== 'quant' && keys[0] !== 'pagina') {
			inputURL.push( {name:keys[0] ,value: keys[1] })
		}
	}
	return inputURL
}

export function MakeOption(x) {
	return { value: x, label: x };
}

export function buttonClickM(el) {
	let valor = +el.target.closest(".valorInput").children[1].value;
	valor++;
	el.target.closest(".valorInput").children[1].value = valor;
}

export function buttonClickL(el) {
	let valor = +el.target.closest(".valorInput").children[1].value;
	if (valor > 0) valor--;
	el.target.closest(".valorInput").children[1].value = valor;
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

