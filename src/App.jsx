import "./App.css";
import { useState, useRef, useEffect } from "react";
import { Quiz } from "./components/Quiz";
import QuizContainer from "./components/QuizContainer";

function App() {
  const fromUnit = "AMD";
  const toUnit = "RUB";
  const conversionRate = 0.20491803278688525;

  return (
    <>
      <QuizContainer>
        <Quiz
          fromUnit={fromUnit}
          toUnit={toUnit}
          conversionRate={conversionRate}
        />
      </QuizContainer>
    </>
  );
}

export default App;
