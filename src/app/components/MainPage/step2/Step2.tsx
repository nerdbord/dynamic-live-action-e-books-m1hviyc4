import React from 'react';
import Button from '../../Button/Button';

interface Step2Props {
  onNext: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext }) => {
  return (
    <div>
      <h2>Step 2</h2>
      <p>Opis drugiego kroku, np. wybór trasy, przygotowania itd.</p>
      <Button onClick={onNext} variant="primary">Go to Step 3</Button>
    </div>
  );
};

export default Step2;