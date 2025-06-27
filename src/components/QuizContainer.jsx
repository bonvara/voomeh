import "./QuizContainer.css";
import ConversionFormula from "./ConversionFormula";
import QuizQuestion from "./QuizQuestion";
import QuizControls from "./QuizControls";

function QuizContainer() {
  const fromUnit = "AMD";
  const toUnit = "RUB";
  const conversionRate = 0.20491803278688525;

  return (
    <div className="quiz-container">
      <h1>Conversion Quiz</h1>
      <h3>Train your intuitive converter</h3>
      <QuizControls />
      <ConversionFormula
        fromUnit={fromUnit}
        toUnit={toUnit}
        conversionRate={conversionRate}
      />
      <QuizQuestion
        fromUnit={fromUnit}
        toUnit={toUnit}
        conversionRate={conversionRate}
      />
    </div>
  );
}

export default QuizContainer;
