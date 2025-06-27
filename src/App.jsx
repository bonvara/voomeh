import "./App.css";
import { useState, useRef, useEffect } from "react";
import Timer from "./components/Timer";
import ConversionFormula from "./components/ConversionFormula";
import { Quiz } from "./components/Quiz";

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

export default App;
