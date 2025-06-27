import "./QuizContainer.css";

function QuizContainer({ children }) {
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
        <select>
          <option value="RUB">RUB</option>
          <option value="AMD">AMD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <span className="to-label">to</span>
        <select>
          <option value="RUB">RUB</option>
          <option value="AMD">AMD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="quiz-box">{children}</div>
    </div>
  );
}

export default QuizContainer;
