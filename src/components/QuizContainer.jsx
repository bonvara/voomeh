import "./QuizContainer.css";
import ConversionFormula from "./ConversionFormula";
import QuizQuestion from "./QuizQuestion";
import QuizControls from "./QuizControls";
import QuizHistory from "./QuizHistory";
import { useState } from "react";
import { convertCurrency } from "../utils/currency.js";

function QuizContainer() {
  const [fromUnit, setFromUnit] = useState("RUB");
  const [toUnit, setToUnit] = useState("RUB");
  const [conversionRate, setConversionRate] = useState(1);
  const [accuracyHistory, setAccuracyHistory] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const handleUnitChange = async (type, value) => {
    if (type === "from") {
      setFromUnit(value);
      setConversionRate(await convertCurrency(value, toUnit));
    } else {
      setToUnit(value);
      setConversionRate(await convertCurrency(fromUnit, value));
    }
    console.log(fromUnit, toUnit, conversionRate);
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
