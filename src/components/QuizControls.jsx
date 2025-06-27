import "./QuizControls.css";
import { getAvailableCurrencies } from "../utils/currency.js";

function QuizControls() {
  const currencies = getAvailableCurrencies();
  
  return (
    <div className="quiz-controls">
      <div className="conversion-type-selector">
        <select>
          <option value="currency">Currency</option>
        </select>
      </div>
      <div className="unit-selectors">
        <select defaultValue="AMD">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span className="to-label">to</span>
        <select defaultValue="RUB">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default QuizControls;
