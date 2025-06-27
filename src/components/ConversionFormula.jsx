import React from 'react';

function ConversionFormula({ fromUnit, toUnit, conversionRate }) {
  const formula = conversionRate < 1
    ? `${toUnit} = ${fromUnit} / ${parseFloat((1 / conversionRate).toFixed(2))}`
    : `${toUnit} = ${fromUnit} * ${parseFloat(conversionRate.toFixed(2))}`;

  return (
    <div className="conversion-formula">
      <p>{formula}</p>
    </div>
  );
}

export default ConversionFormula;
