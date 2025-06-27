import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const fromUnit = "inches";
  const toUnit = "cm";
  const conversionRate = 2.54;

  return (
    <>
      <Quiz
        fromUnit={fromUnit}
        toUnit={toUnit}
        conversionRate={conversionRate}
      />
    </>
  );
}

function Quiz({ fromUnit, toUnit, conversionRate }) {
  const inputRef = useRef(null);
  const [feedback, setFeedback] = useState(null);
  const [number1, setNumber1] = useState(
    () => Math.floor(Math.random() * 100) + 1
  );
  const correctAnswer = number1 * conversionRate;
  const conversionFormula =
    conversionRate < 1
      ? `${toUnit} = ${fromUnit} / ${parseFloat(
          (1 / conversionRate).toFixed(2)
        )}`
      : `${toUnit} = ${fromUnit} * ${parseFloat(conversionRate.toFixed(2))}`;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFirstAnswer = () => {
    const userAnswer = parseFloat(inputRef.current.value);
    if (!isNaN(userAnswer)) {
      const difference = Math.abs(userAnswer - correctAnswer);
      const maxDifference = Math.max(userAnswer, correctAnswer);
      const accuracy = ((maxDifference - difference) / maxDifference) * 100;
      setFeedback({
        correct: correctAnswer.toFixed(2),
        accuracy: Math.round(accuracy) + "%",
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!feedback) {
        handleFirstAnswer();
      } else {
        handleNext();
      }
    }
  };

  const handleNext = () => {
    setNumber1(Math.floor(Math.random() * 100) + 1);
    setFeedback(null);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <h1>Conversion Quiz</h1>
      <h3>Train your intuitive converter</h3>
      <div className="measurement-box">
        <p>{conversionFormula}</p>
        <h2>
          {number1} {fromUnit} is
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
        {!feedback && (
          <button className="show-answer-button" onClick={handleFirstAnswer}>
            Show Answer
          </button>
        )}
        {feedback && (
          <>
            <div className="feedback">
              <p>Answer:</p>
              <p>
                {feedback.correct} {toUnit}
              </p>
              <p>Accuracy: {feedback.accuracy}</p>
            </div>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
