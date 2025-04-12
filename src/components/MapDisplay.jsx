import React from 'react';
import baseMap from '../assets/base_map.png';

const regionColors = [
  'rgba(255, 0, 0, 0.4)',     // Region 1 - Red
  'rgba(0, 128, 0, 0.4)',     // Region 2 - Green
  'rgba(255, 165, 0, 0.4)',   // Region 3 - Orange
  'rgba(0, 0, 255, 0.4)',     // Region 4 - Blue
  'rgba(128, 0, 128, 0.4)'    // Region 5 - Purple
];

const regionStyles = [
  { top: '68%', left: '29%', width: '6%', height: '25%' },
  { top: '55%', left: '37%', width: '7%', height: '25%' },
  { top: '40%', left: '45%', width: '6%', height: '18%' },
  { top: '25%', left: '55%', width: '7%', height: '18%' },
  { top: '10%', left: '63%', width: '6%', height: '20%' }
];

const MapDisplay = ({ presence }) => {
  return (
    <div className="relative w-full max-w-3xl h-[600px]">
      <img src={baseMap} alt="Base Map" className="w-full h-full object-contain" />
      {presence.map((val, index) =>
        val === 'Y' ? (
          <div
            key={index}
            className="absolute"
            style={{
              backgroundColor: regionColors[index],
              ...regionStyles[index],
              position: 'absolute',
              borderRadius: '4px',
            }}
          />
        ) : null
      )}
    </div>
  );
};

export default MapDisplay;
