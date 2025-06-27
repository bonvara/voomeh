import "./QuizContainer.css";
import ConversionFormula from "./ConversionFormula";
import QuizQuestion from "./QuizQuestion";
import QuizControls from "./QuizControls";
import QuizHistory from "./QuizHistory";
import { useState } from "react";

function QuizContainer() {
  const [fromUnit, setFromUnit] = useState("AMD");
  const [toUnit, setToUnit] = useState("RUB");
  const conversionRate = 1;
  const [accuracyHistory, setAccuracyHistory] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const handleUnitChange = (type, value) => {
    if (type === 'from') {
      setFromUnit(value);
    } else {
      setToUnit(value);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Conversion Quiz</h1>
      <h3>Train your intuitive converter</h3>
      <QuizControls onUnitChange={handleUnitChange} />
      <ConversionFormula
        fromUnit={fromUnit}
        toUnit={toUnit}
        conversionRate={conversionRate}
      />
      {!isQuizStarted ? (
        <button className="start-button" onClick={() => setIsQuizStarted(true)}>
          Start Quiz
        </button>
      ) : (
        <QuizQuestion
          fromUnit={fromUnit}
          toUnit={toUnit}
          conversionRate={conversionRate}
          onAccuracyChange={(accuracyScore) => {
            setAccuracyHistory((prev) => [...prev, accuracyScore]);
          }}
        />
      )}
      <QuizHistory accuracyHistory={accuracyHistory} />
    </div>
  );
}

export default QuizContainer;
