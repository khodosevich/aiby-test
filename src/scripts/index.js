import { languagesHandler } from "./languages.js";
import { buttonsHandler } from "./buttonsHandler.js";

document.addEventListener("DOMContentLoaded", async function() {
	buttonsHandler();
	await languagesHandler();
});