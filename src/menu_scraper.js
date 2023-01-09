import axios, {isCancel, AxiosError} from 'axios';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

// Make a request to Mensa website
const mensaMap = {
	'sued': {name: 'Mensa TechFak', url: 'https://www.werkswelt.de/index.php?id=sued'},
	'lmpl': {name: 'Mensa Langemarckplatz Erlangen', url: 'https://www.werkswelt.de/index.php?id=lmpl'},
	'mohm': {name: 'Mensa Ohm Nürnberg', url: 'https://www.werkswelt.de/index.php?id=mohm'},
	'isch': {name: 'Mensa Insel Schütt', url: 'https://www.werkswelt.de/index.php?id=isch'},
}


export async function getMenu(url) {
	try {
		const response = await axios.get(url);
		// handle sucess
		const data = response.data;
		// use JSDOM constructor
		const {document} = (new JSDOM(data)).window;
		// get the menu div element
		const mensaDivElement = document.querySelector('div[style*="border-radius: 4px 4px 0px 0px;"]').innerHTML;

		return mensaDivElement;
	} catch(error) {
		console.error(error);
	}
}

