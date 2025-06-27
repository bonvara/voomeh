const API_BASE_URL = "https://api.exchangerate-api.com/v4/latest";

export async function getExchangeRates() {
  try {
    const response = await fetch(`${API_BASE_URL}/USD`);
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
}

export async function convertCurrency(fromCurrency, toCurrency, amount = 1) {
  try {
    const rates = await getExchangeRates();
    const baseRate = rates[fromCurrency] || 1;
    const targetRate = rates[toCurrency] || 1;
    return (amount * targetRate) / baseRate;
  } catch (error) {
    console.error("Error converting currency:", error);
    throw error;
  }
}

// export function getAvailableCurrencies() {
//   return [
//     { code: "RUB", name: "Russian Ruble" },
//     { code: "AMD", name: "Armenian Dram" },
//     { code: "USD", name: "US Dollar" },
//     { code: "EUR", name: "Euro" },
//     { code: "CNY", name: "Chinese Yuan" },
//     { code: "KRW", name: "South Korean Won" },
//   ];
// }

export function getAvailableCurrencies() {
  return ["RUB", "AMD", "USD", "EUR", "CNY", "KRW"];
}
