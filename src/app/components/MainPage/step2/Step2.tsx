import React from 'react';
import Button from '../../Button/Button';
import Container from '../../Container/Container';

interface Step2Props {
  onNext: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext }) => {
  const options = [
    { value: '1h', label: '1h' },
    { value: '1-2h', label: '1 - 2 h' },
    { value: '2-3h', label: '2 - 3 h' },
    { value: '3-4h', label: '3 - 4 h' },
  ];

  const handleOptionChange = (value: string) => {
    console.log(`Selected: ${value}`);
  };
  return (
   
<Container>
<h2>Zostało kilka konkretów:</h2>
      <p>Ile masz czasu?</p>

      {/* <RadioGroup options={options} onChange={handleOptionChange} /> */}

      {/* <SetupStepper currentStep={2} totalSteps={3} /> */}

      <Button onClick={onNext} variant="primary">
        Wybierz tam zadani itd
      </Button>
    </Container>
  );
};

export default Step2;