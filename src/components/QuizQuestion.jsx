import { useState, useRef, useEffect } from "react";
import Timer from "./Timer";
import "./QuizQuestion.css";

export default function QuizQuestion({ fromUnit, toUnit, conversionRate }) {
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
    const accuracy = ((maxDifference - difference) / maxDifference) * 100;
    setFeedback({
      correct: correctAnswer.toFixed(2),
      accuracy: Math.round(accuracy) + "%",
    });
  };

  const handleKeyPress = (e) => {
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
        <h2>
          {startingValue} {fromUnit} is:
        </h2>
        <h2>
          <input
            type="text"
            ref={inputRef}
            onKeyDown={handleKeyPress}
            readOnly={!!feedback}
          />{" "}
          {toUnit}
        </h2>
        <h2>Correct:</h2>
        <h2>
          <input readOnly={true} value={feedback ? feedback.correct : "?"} />{" "}
          {toUnit}
        </h2>
        <h2>Accuracy:</h2>
        <h2>{feedback ? feedback.accuracy : "?"}</h2>
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
