export const languagesHandler = async () => {
	const currentUrl = window.location.href
	const lang = currentUrl.split("lang=").pop();

	if (lang.length === 2) {
		const translations = await loadTranslations(lang);
		await applyTranslations(translations);
	}
};

const loadTranslations =  async (lang) => {
	const response = await fetch(`./languages/${lang}.json`);
	return await response.json();
};

 const applyTranslations = (translations) => {
	document.querySelectorAll("[data-i18n]").forEach(element => {
		const key = element.getAttribute("data-i18n");

		if (translations[key]) {
			let translatedText = translations[key];

			if (PRICE_CONFIG[key] && translatedText.includes('{{price}}')) {
				const config = PRICE_CONFIG[key];
				const formattedPrice = config.format.replace('%s', config.value);
				translatedText = translatedText.replace('{{price}}', formattedPrice);
			}

			if (containsHTML(translatedText)) {
				element.innerHTML = translatedText;
			} else {
				element.textContent = translatedText;
			}
		}
	});
};

const PRICE_CONFIG = {
	'weekly-price-week': { value: '6.99', format: '$%s' },
	'price-week': { value: '0.48', format: '$%s' },
	'price-year': { value: '39.99', format: '$%s' }
};

const containsHTML = (str) =>  {
	return /<[a-z][\s\S]*>/i.test(str);
};