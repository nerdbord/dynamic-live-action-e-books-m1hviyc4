import React from 'react';
import Button from '../components/Button/Button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick} variant="primary">
        Primary Button
      </Button>
      <Button onClick={handleClick} variant="secondary" className="custom-class">
        Secondary Button
      </Button>
    </div>
  );
};

export default App;
