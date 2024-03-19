import React, { useState } from 'react';

function Rm() {
  const [lastWeight, setLastWeight] = useState('');
  const [lastRep, setLastRep] = useState(10);
  const [increment, setIncrement] = useState(5);
  const [minRep, setMinRep] = useState(8);
  const [maxRep, setMaxRep] = useState(10);
  const [resultsMatrix, setResultsMatrix] = useState([]);

  // Function to calculate 1RM based on the Epley formula
  const calculate1RM = (weight, reps) => weight * (1 + reps / 30);

  // Format numbers with max 2 digits after the comma, removing trailing zeros
  const formatNumber = (number) => {
    const formatted = number.toFixed(2);
    return formatted.endsWith('.00') ? formatted.slice(0, -3) : formatted;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const weights = Array.from({ length: 7 }, (_, i) => parseInt(lastWeight) - 2 * increment + i * increment);
    const repsRange = Array.from({ length: 10 }, (_, i) => i + 6);

    const matrix = repsRange.map(rep =>
      weights.map(weight => calculate1RM(weight, rep))
    );

    setResultsMatrix(matrix);
  };

  const last1RM = calculate1RM(parseInt(lastWeight), lastRep);

  const closestAbove1RM = resultsMatrix.map(row =>
    row.reduce((closest, cell) => {
      if (cell >= last1RM && (closest === null || cell < closest)) {
        return cell;
      }
      return closest;
    }, null)
  );

  return (
    <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Rm Calculator</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label htmlFor="lastWeight">Previous Weight:</label>
          <input
            type="number"
            id="lastWeight"
            value={lastWeight}
            onChange={(e) => setLastWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastRep">Previous nbRep:</label>
          <input
            type="number"
            id="lastRep"
            value={lastRep}
            onChange={(e) => setLastRep(parseInt(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="increment">Increment:</label>
          <input
            type="number"
            id="increment"
            value={increment}
            onChange={(e) => setIncrement(parseInt(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="minRep">Min nbRep:</label>
          <input
            type="number"
            id="minRep"
            value={minRep}
            onChange={(e) => setMinRep(parseInt(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="maxRep">Max nbRep:</label>
          <input
            type="number"
            id="maxRep"
            value={maxRep}
            onChange={(e) => setMaxRep(parseInt(e.target.value))}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>

      {resultsMatrix.length > 0 && (
        <table style={{ borderSpacing: '0', borderCollapse: 'separate', margin: '0 auto', width: 'auto', padding: '10px' }}>
          <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid white' }}>Reps \ Weight</th>
            {Array.from({ length: 7 }, (_, i) => parseInt(lastWeight) - 2 * increment + i * increment).map((weight, index) => (
              <th key={index} style={{ padding: '10px', borderBottom: '1px solid white' }}>{weight}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {resultsMatrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td style={{ padding: '10px', borderRight: '1px solid white' }}>{6 + rowIndex}</td>
              {row.map((cell, cellIndex) => {
                const cellValue = formatNumber(cell);
                let backgroundColor = cell < last1RM ? 'grey' : '';
                let textColor = 'white';
                if (cell === last1RM) {
                  backgroundColor = 'green';
                  textColor = 'black';
                } else if (cell === closestAbove1RM[rowIndex] && cell !== last1RM) {
                  backgroundColor = 'yellow';
                  textColor = 'black';
                }

                return (
                  <td key={cellIndex} style={{ padding: '10px', borderRight: '1px solid white', backgroundColor, color: textColor }}>
                    {cellValue}
                  </td>
                );
              })}
            </tr>
          ))}
          </tbody>
        </table>
      )}
    </div>
  );

}

export default Rm;




