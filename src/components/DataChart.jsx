import React from 'react';

const DataChart = ({ data, onChange }) => {
  const years = Object.keys(data);
  const regions = ['Region 1', 'Region 2', 'Region 3', 'Region 4', 'Region 5'];

  return (
    <div className="overflow-auto">
      <table className="w-full text-sm border border-black">
        <thead>
          <tr>
            <th className="border border-black px-2 py-1">Year</th>
            {regions.map(region => (
              <th key={region} className="border border-black px-2 py-1">{region}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {years.map((year, yIdx) => (
            <tr key={year}>
              <td className="border border-black px-2 py-1 font-bold">{year}</td>
              {data[year].map((val, rIdx) => (
                <td key={rIdx} className="border border-black px-2 py-1">
                  <input
                    className="w-8 text-center border border-gray-300"
                    value={val}
                    maxLength={1}
                    onChange={e => onChange(year, rIdx, e.target.value.toUpperCase())}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataChart;
