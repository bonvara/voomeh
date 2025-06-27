import React from "react";

function ConversionFormula({ fromUnit, toUnit, conversionRate }) {
  const formula =
    conversionRate < 1
      ? `${fromUnit} / ${parseFloat(
          (1 / conversionRate).toFixed(2)
        )} = ${toUnit}`
      : `${fromUnit} x ${parseFloat(conversionRate.toFixed(2))} = ${toUnit}`;

  return (
    <div className="conversion-formula">
      <p>{formula}</p>
    </div>
  );
}

export default ConversionFormula;
