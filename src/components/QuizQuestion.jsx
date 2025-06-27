import { useState, useRef, useEffect } from "react";
import Timer from "./Timer";
import "./QuizQuestion.css";

export default function QuizQuestion({
  fromUnit,
  toUnit,
  conversionRate,
  onAccuracyChange,
}) {
  const inputRef = useRef(null);
  const [feedback, setFeedback] = useState(null);
  const [startingValue, setStartingValue] = useState(
    () => Math.floor(Math.random() * 100) + 1
  );
  const correctAnswer = startingValue * conversionRate;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAnswer = () => {
    let userAnswer = parseFloat(inputRef.current.value);
    if (isNaN(userAnswer)) {
      userAnswer = 0;
    }
    const difference = Math.abs(userAnswer - correctAnswer);
    const maxDifference = Math.max(userAnswer, correctAnswer);
    const accuracyScore = Math.round(
      ((maxDifference - difference) / maxDifference) * 100
    );
    console.log(accuracyScore);
    setFeedback({
      correct: correctAnswer,
      accuracyScore: accuracyScore,
    });
    onAccuracyChange?.(accuracyScore); // Pass accuracyScore to parent
  };

  const handleKeyPress = (e) => {
    // TODO: fix situation when user presses enter when the timer just runs out
    if (e.key === "Enter") {
      if (!feedback) {
        handleAnswer();
      } else {
        handleNext();
      }
    }
  };

  const handleNext = () => {
    setStartingValue(Math.floor(Math.random() * 100) + 1);
    setFeedback(null);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <div className="answer-group">
        {/* Row 1 */}
        <h2>
          {startingValue} {fromUnit} is:
        </h2>
        <input
          type="text"
          ref={inputRef}
          onKeyDown={handleKeyPress}
          readOnly={!!feedback}
        />{" "}
        <h2>{toUnit}</h2>
        {/* Row 2 */}
        <h2>Correct:</h2>
        <h2>{feedback ? feedback.correct : "?"}</h2>
        <h2>{toUnit}</h2>
        {/* Row 3 */}
        <h2>Score:</h2>
        <h2
          className={`accuracy ${
            feedback?.accuracyScore >= 90
              ? "excellent"
              : feedback?.accuracyScore >= 70
              ? "good"
              : feedback?.accuracyScore >= 50
              ? "needs-improvement"
              : "poor"
          }`}
        >
          {feedback ? `${feedback.accuracyScore}%` : "?"}
        </h2>
      </div>
      {!feedback && <Timer defaultTime={7} onTimeUp={handleAnswer} />}
      {!feedback && (
        <button className="show-answer-button" onClick={handleAnswer}>
          Show Answer
        </button>
      )}
      {feedback && (
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}
