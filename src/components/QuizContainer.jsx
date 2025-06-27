function QuizContainer({ children }) {
  return (
    <div className="quiz-container">
      <h1>Conversion Quiz</h1>
      <h3>Train your intuitive converter</h3>
      <div className="quiz-box">
        {children}
      </div>
    </div>
  );
}

export default QuizContainer;
