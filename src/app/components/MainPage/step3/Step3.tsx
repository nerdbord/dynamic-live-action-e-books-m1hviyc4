'use client';
import React from 'react';
import Button from '../../Button/Button';
import { useRouter } from 'next/navigation';

interface Step3Props {
  onNext?: () => void;
}

const Step3: React.FC<Step3Props> = () => {
  const router = useRouter();

  const handleNext = () => {
    router.push('/game'); 
  };

  return (
    <div>
      <h2>Step 3</h2>
      <p>Opis drugiego kroku, np. wybór trasy, przygotowania itd.</p>
      <Button onClick={handleNext} variant="primary">Go to Step 3</Button>
    </div>
  );
};

export default Step3;
