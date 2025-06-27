import "./QuizContainer.css";

function QuizContainer({ children }) {
  return (
    <div className="quiz-container">
      <h1>Conversion Quiz</h1>
      <h3>Train your intuitive converter</h3>
      <div className="conversion-type-selector">
        <select>
          <option value="currency">Currency</option>
          <option value="length">Length</option>
        </select>
      </div>
      <div className="quiz-box">
        {children}
      </div>
    </div>
  );
}

export default QuizContainer;
