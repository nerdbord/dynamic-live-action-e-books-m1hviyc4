'use client'
import React, { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Map from '../components/Map/Map';
import InfoBoxes from '../components/InfoBoxes/InfoBoxes';
import StatsBox from '../components/StatsBox/StatsBox';
import ReminderButton from '../components/ReminderButton/ReminderButton';
import Button from '../components/Button/Button';
import styles from './page.module.scss';

export default function Home() {
  const [tourStarted, setTourStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [location, setLocation] = useState('Pobieranie lokalizacji...');
  const [activeStep, setActiveStep] = useState<number>(0)


  useEffect(() => {
    const savedStep = localStorage.getItem('activeStep')
    if (savedStep && !isNaN(parseInt(savedStep))) {
      const step = parseInt(savedStep)
      // Sprawdź, czy odczytany krok jest w prawidłowym zakresie (od 0 do 3)
      if (step >= 0 && step <= 3) {
        setActiveStep(step)
      }
    }
  }, [])

  const data = [
    { value: 1, label: 'Lemur', unit: '' },
    { value: 3, label: 'godz', unit: '' },
    { value: 50, label: 'pln', unit: '' },
  ];

  const stats = [
    { value: 6, label: 'Zadań' },
    { value: '4km', label: 'Podróży' },
    { value: 350, label: 'EXP' },
  ];

  const handleEdit = (index: number) => {
    alert(`Edytuj box ${index + 1}`);
  };

  useEffect(() => {
    const tasks = [
      { id: 1, completed: true },
      { id: 2, completed: true },
      { id: 3, completed: false },
      { id: 4, completed: false },
    ];

    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const calculatedProgress = (completedTasks / totalTasks) * 100;
    setProgress(calculatedProgress);

    setLocation('Kraków');
  }, []);

  const handleStartTour = () => {
    setTourStarted(true);
  };

  const goBack = () => {
    console.log('goBack function called');
    localStorage.removeItem('activeStep');
    setActiveStep(0);
    setTourStarted(false);
  };

  return (
    <main>
      <Container>
        {!tourStarted ? (
          <>
            <ProgressBar progress={progress} location={location} onExit={goBack} />
            <Map />
            <InfoBoxes data={data} onEdit={handleEdit} />
            <StatsBox stats={stats} />
            <ReminderButton />
            <Button onClick={handleStartTour} variant="primary">
              Zaczynamy Tour
            </Button>
          </>
        ) : (
          <>
            {/* Nowy widok, który jest widoczny po prawej stronie na zrzucie ekranu */}
            <ProgressBar progress={progress} location={location} onExit={goBack} />
            <div className={styles.tourHeader}>
              <Button onClick={() => console.log('Wyjdź')} variant="secondary">Wyjdź</Button>
              <Button onClick={() => console.log('Otwórz transkrypcję')} variant="secondary">
                Otwórz transkrypcję
              </Button>
            </div>
            <Map />
            <div className={styles.tourStep}>
              <h3>SPACEREK NA RYNACZEK</h3>
              <p>Przejdź do [miejsce] [X] m.</p>
              <Button onClick={() => console.log('Następny krok')} variant="primary">
                Następny krok
              </Button>
            </div>
          </>
        )}
      </Container>
    </main>
  );
}
