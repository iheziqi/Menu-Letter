import axios from 'axios';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

export async function eurToCnyCurrencyRate () {
	try {
		const response = await axios.get('https://www.google.com/finance/quote/EUR-CNY');
		const data = response.data;
		const {document} = (new JSDOM(data)).window;
		const currencyRate = document.querySelector('.YMlKec.fxKbKc').textContent;
		return currencyRate;
	} catch (error) {
		console.log(error);
	}
}
