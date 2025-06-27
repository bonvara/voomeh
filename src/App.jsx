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
  const number1 = Math.floor(Math.random() * 100) + 1;
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const userAnswer = parseFloat(e.target.value);
      if (!isNaN(userAnswer)) {
        const difference = Math.abs(userAnswer - correctAnswer);
        const maxDifference = Math.max(userAnswer, correctAnswer);
        const accuracy = ((maxDifference - difference) / maxDifference) * 100;
        setFeedback({
          correct: correctAnswer.toFixed(2),
          accuracy: Math.round(accuracy) + "%",
        });
      }
    }
  };

  return (
    <div className="container">
      <div className="measurement-box">
        <p>{conversionFormula}</p>
        <h2>
          {number1} {fromUnit} is
        </h2>
        <h2>
          <input type="text" ref={inputRef} onKeyDown={handleKeyPress} />{" "}
          {toUnit}
        </h2>
        {feedback && (
          <div className="feedback">
            <p>Answer:</p>
            <p>
              {feedback.correct} {toUnit}
            </p>
            <p>Accuracy: {feedback.accuracy}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function QuizV1() {
  const [inches, setInches] = useState(
    () => Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [attempts, setAttempts] = useState(0);

  // Calculate the correct conversion
  const correctCm = inches * 2.54;

  const checkGuess = () => {
    const guessNum = parseFloat(guess);
    if (!isNaN(guessNum)) {
      const difference = Math.abs(guessNum - correctCm);
      const maxDifference = Math.max(correctCm, guessNum);
      const accuracyScore = Math.round((1 - difference / maxDifference) * 100);

      setAccuracy(accuracyScore);
      setShowResult(true);
      setAttempts((prev) => prev + 1);
    }
  };

  const generateNewNumber = () => {
    setInches(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setShowResult(false);
    setAccuracy(0);
  };

  return (
    <div className="container">
      <h1>Measurement Quiz</h1>
      <div className="measurement-box">
        <p>Convert this measurement:</p>
        <h2>{inches} inches</h2>

        <div className="input-group">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Enter your guess in cm"
          />
          <button onClick={checkGuess}>Check Answer</button>
        </div>

        {showResult && (
          <div className="result">
            <p>Your guess: {guess} cm</p>
            <p>Correct answer: {correctCm.toFixed(2)} cm</p>
            <p
              className={`accuracy ${
                accuracy >= 90
                  ? "excellent"
                  : accuracy >= 70
                  ? "good"
                  : "needs-improvement"
              }`}
            >
              Accuracy: {accuracy}%
            </p>
          </div>
        )}

        <div className="stats">
          <p>Total attempts: {attempts}</p>
        </div>

        <button onClick={generateNewNumber} className="new-number-btn">
          Try Another Number
        </button>
      </div>
    </div>
  );
}

export default App;
