'use client'
import React from 'react';
import Button from '../Button/Button';

 const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick} variant="primary">
      Zaczynamy tour
      </Button>

      <Button onClick={handleClick} variant="secondary" className="custom-class">
      Edytuj
      </Button>
    </div>
  );
};

export default App;