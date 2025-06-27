import "./QuizContainer.css";
import ConversionFormula from "./ConversionFormula";
import QuizQuestion from "./QuizQuestion";
import QuizControls from "./QuizControls";
import QuizHistory from "./QuizHistory";

function QuizContainer() {
  const fromUnit = "AMD";
  //   const toUnit = "RUB";
  const toUnit = "AMD";
  //   const conversionRate = 0.20491803278688525;
  const conversionRate = 1;

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
      <QuizHistory />
    </div>
  );
}

export default QuizContainer;
