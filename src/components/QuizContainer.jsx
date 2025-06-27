import "./QuizContainer.css";
import ConversionFormula from "./ConversionFormula";

function QuizContainer({ children }) {
  const fromUnit = "RUB";
  const toUnit = "USD";
  const conversionRate = 0.013;

  return (
    <div className="quiz-container">
      <h1>Conversion Quiz</h1>
      <h3>Train your intuitive converter</h3>
      <div className="conversion-type-selector">
        <select>
          <option value="currency">Currency</option>
        </select>
      </div>
      <div className="unit-selectors">
        <select defaultValue="AMD">
          <option value="RUB">RUB</option>
          <option value="AMD">AMD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <span className="to-label">to</span>
        <select defaultValue="RUB">
          <option value="RUB">RUB</option>
          <option value="AMD">AMD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <ConversionFormula
        fromUnit={fromUnit}
        toUnit={toUnit}
        conversionRate={conversionRate}
      />
      <div className="quiz-box">{children}</div>
    </div>
  );
}

export default QuizContainer;
