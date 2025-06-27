import { getExchangeRates } from "./currency.js";

getExchangeRates().then((rates) => console.log(rates));
