import "./App.css";
import { useState, useRef, useEffect } from "react";
import Timer from "./components/Timer";
import ConversionFormula from "./components/ConversionFormula";

function App() {
  const fromUnit = "AMD";
  const toUnit = "RUB";
  const conversionRate = 0.20491803278688525;

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
    <div className="container">
      <h1>Conversion Quiz</h1>
      <h3>Train your intuitive converter</h3>
      <div className="measurement-box">
        <ConversionFormula
          fromUnit={fromUnit}
          toUnit={toUnit}
          conversionRate={conversionRate}
        />
        <h2>
          {startingValue} {fromUnit} is
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
        {!feedback && <Timer defaultTime={7} onTimeUp={handleAnswer} />}
        {!feedback && (
          <button className="show-answer-button" onClick={handleAnswer}>
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
