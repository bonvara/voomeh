import { getExchangeRates, convertCurrency } from './currency.js';

async function testCurrency() {
  try {
    console.log('Fetching exchange rates...');
    const rates = await getExchangeRates();
    console.log('Available rates:', Object.keys(rates));

    // Test conversion
    console.log('\nTesting currency conversion...');
    const fromCurrency = 'USD';
    const toCurrency = 'EUR';
    const amount = 100;
    const result = await convertCurrency(fromCurrency, toCurrency, amount);
    console.log(`${amount} ${fromCurrency} = ${result} ${toCurrency}`);

  } catch (error) {
    console.error('Error:', error);
  }
}

testCurrency();
