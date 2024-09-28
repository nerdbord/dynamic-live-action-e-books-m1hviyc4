'use client';
import React, { useState, useEffect } from 'react';
import Step1 from './components/MainPage/step1/Step1';
import MainPage from './components/MainPage/MainPage';
import Step2 from './components/MainPage/step2/Step2';
import Step3 from './components/MainPage/step3/Step3';
import Button from './components/Button/Button';

export default function Home(): JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const savedStep = localStorage.getItem('activeStep');
    if (savedStep && !isNaN(parseInt(savedStep))) {
      const step = parseInt(savedStep);
      // Sprawdź, czy odczytany krok jest w prawidłowym zakresie (od 0 do 3)
      if (step >= 0 && step <= 3) {
        setActiveStep(step);
      }
    }
  }, []);

  const handleSetStep = (step: number) => {
    setActiveStep(step);
    localStorage.setItem('activeStep', step.toString());
  };

  const handleReset = () => {
    localStorage.removeItem('activeStep');
    setActiveStep(0);
  };

  const renderContent = () => {
    switch (activeStep) {
      case 1:
        return <Step1 onNext={() => handleSetStep(2)} />;
      case 2:
        return <Step2 onNext={() => handleSetStep(3)} />;
      case 3:
        return <Step3 onNext={() => handleSetStep(0)} />;
      default:
        return <MainPage onStart={() => handleSetStep(1)} onViewPreviousTours={() => handleSetStep(1)} />;
    }
  };

  return (
    <main style={{ position: 'relative' }}>
      {renderContent()}
      <Button
        onClick={handleReset}
        variant="secondary"
       className="reset-button"
      >
        Reset
      </Button>
    </main>
  );
}
