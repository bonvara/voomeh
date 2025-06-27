import "./QuizHistory.css";

function QuizHistory({ accuracyHistory }) {
  const attempts = accuracyHistory.length;
  const averageAccuracy =
    accuracyHistory.reduce((acc, val) => acc + val, 0) / accuracyHistory.length;
  return (
    <div className="quiz-history">
      <h2>Average Accuracy: {averageAccuracy.toFixed(2)}%</h2>
      <h2>№ attempts: {attempts}</h2>
      <h2>History:</h2>
      <div className="history-list">
        {accuracyHistory.map((accuracy, index) => (
          <div key={index}>
            <p>
              #{index + 1}: {accuracy}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizHistory;
