import React, { useState } from 'react';
import MapDisplay from './components/MapDisplay';
import YearControl from './components/YearControl';
import DataChart from './components/DataChart';

const App = () => {
  const [year, setYear] = useState(2016);
  const [data, setData] = useState({
    2016: ['N', 'N', 'N', 'N', 'N'],
    2017: ['Y', 'N', 'N', 'N', 'N'],
    2018: ['Y', 'N', 'N', 'N', 'N'],
    2019: ['Y', 'N', 'N', 'N', 'N'],
    2020: ['Y', 'Y', 'N', 'N', 'N'],
    2021: ['Y', 'Y', 'Y', 'N', 'N'],
    2022: ['Y', 'Y', 'Y', 'N', 'N'],
    2023: ['Y', 'Y', 'Y', 'Y', 'N'],
    2024: ['Y', 'Y', 'Y', 'Y', 'Y'],
    2025: ['Y', 'Y', 'Y', 'Y', 'N'],
  });

  const handleDataChange = (year, regionIndex, value) => {
    const updatedYear = [...data[year]];
    updatedYear[regionIndex] = value;
    setData({ ...data, [year]: updatedYear });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/3 flex flex-col items-center p-4">
        <h1 className="text-xl font-bold mb-4">Invasive Carp Presence: {year}</h1>
        <MapDisplay presence={data[year]} />
        <YearControl year={year} setYear={setYear} />
      </div>
      <div className="w-1/3 p-4 overflow-auto">
        <DataChart data={data} onChange={handleDataChange} />
      </div>
    </div>
  );
};

export default App;
