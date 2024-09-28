'use client'
import React, { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Map from '../components/Map/Map';
import InfoBoxes from '../components/InfoBoxes/InfoBoxes';
import StatsBox from '../components/StatsBox/StatsBox';
import ReminderButton from '../components/ReminderButton/ReminderButton';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [location, setLocation] = useState('Pobieranie lokalizacji...');

  // Dane dla InfoBoxes
  const data = [
    { value: 1, label: 'Lemur', unit: '' },
    { value: 3, label: 'godz', unit: '' },
    { value: 50, label: 'pln', unit: '' },
  ];

  // Dane dla StatsBox
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

    setLocation('Sosnowiec');
  }, []);

  const goBack = () => {
    console.log('Powrót');
  };

  return (
    <main>
      <Container>
        <ProgressBar progress={progress} location={location} onExit={goBack} />
        <Map />
        <InfoBoxes data={data} onEdit={handleEdit} />
        <StatsBox stats={stats} />
        <ReminderButton />
      </Container>
    </main>
  );
}
