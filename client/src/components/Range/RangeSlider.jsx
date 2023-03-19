/**
This component is a range slider that allows the user to select a project budget. 
It uses React hooks to manage state and updates the slider value based on the user's input. 
The component renders an input element with a range attribute, and a span element to display the current value of the slider. 
It accepts a minimum and maximum value of 0 and 10,000 respectively, and has a default value of 1000.
 */

import React, { useState } from 'react';

function RangeSlider() {
  const [sliderValue, setSliderValue] = useState(1000);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className='w-full'>
      <span>Project Budget: {sliderValue}$</span>
      <input type="range" min="0" max="10000" value={sliderValue} onChange={handleSliderChange} className="w-full mb-5 bg-primary-400"/>
    </div>
  );
}

export default RangeSlider;
