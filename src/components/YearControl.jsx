import React from 'react';

const YearControl = ({ year, setYear }) => {
  const handlePrev = () => {
    if (year > 2016) setYear(year - 1);
  };

  const handleNext = () => {
    if (year < 2025) setYear(year + 1);
  };

  return (
    <div className="mt-4 flex gap-4">
      <button onClick={handlePrev} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">← Previous</button>
      <button onClick={handleNext} className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded">Next →</button>
    </div>
  );
};

export default YearControl;
