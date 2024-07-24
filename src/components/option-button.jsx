import React, { useState } from 'react';

const OptionButton = ({ setActive }) => {
  const handleNext = () => {
    setActive((prev) => prev + 1);
  }

  const handleBack = () => {
    setActive((prev) => prev - 1);
  }

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

const ParentComponent = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <h1>Active State: {active}</h1>
      <OptionButton setActive={setActive} />
    </div>
  );
};

export default ParentComponent;
