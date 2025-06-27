import "./QuizHistory.css";

function QuizHistory({ accuracyHistory }) {
  const attempts = accuracyHistory.length;
  const averageAccuracy =
    accuracyHistory.reduce((acc, val) => acc + val, 0) / accuracyHistory.length;
  return (
    <div className="quiz-history">
      <h2>Average Score: {averageAccuracy.toFixed(0)}%</h2>
      <h2>№ attempts: {attempts}</h2>
      <h2>Score history:</h2>
      <div className="history-list">
        {accuracyHistory
          .slice()
          .reverse()
          .map((accuracy, index) => (
            <div key={index}>
              <p>
                #{attempts - index}: {accuracy}%
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default QuizHistory;
