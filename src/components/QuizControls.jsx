import "./QuizControls.css";

function QuizControls() {
  return (
    <div className="quiz-controls">
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
    </div>
  );
}

export default QuizControls;
