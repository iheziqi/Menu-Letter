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
		const { window } = new JSDOM(data, { runScripts: "outside-only" });
		// remove all the <details> tag, because Gmail client does not support it
		window.eval(`
 				const details = document.getElementsByTagName('details');
				const form = document.querySelector('form');
                Array.from(details).forEach((item) => {
                    item.remove();
                });
				form.remove();
			`);
		// get the menu div element
		const  mensaDivElement = window.document.querySelector('div[style*="border-radius: 4px 4px 0px 0px;"]');

		return mensaDivElement.innerHTML;
	} catch(error) {
		console.error(error);
	}
}

