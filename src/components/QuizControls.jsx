import "./QuizControls.css";
import { getAvailableCurrencies } from "../utils/currency.js";
import { useState } from "react";

function CurrencySelect({ onChange }) {
  const currencies = getAvailableCurrencies();

  return (
    <select onChange={onChange}>
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}

function QuizControls({ onUnitChange }) {
  const [fromUnit, setFromUnit] = useState("AMD");
  const [toUnit, setToUnit] = useState("RUB");

  const handleUnitChange = (type) => (value) => {
    if (type === "from") {
      setFromUnit(value);
      onUnitChange("from", value);
    } else {
      setToUnit(value);
      onUnitChange("to", value);
    }
  };

  return (
    <div className="quiz-controls">
      <div className="conversion-type-selector">
        <select>
          <option value="currency">Currency</option>
        </select>
      </div>
      <div className="unit-selectors">
        <CurrencySelect
          onChange={(e) => handleUnitChange("from")(e.target.value)}
        />
        <span className="to-label">to</span>
        <CurrencySelect
          onChange={(e) => handleUnitChange("to")(e.target.value)}
        />
      </div>
    </div>
  );
}

export default QuizControls;
