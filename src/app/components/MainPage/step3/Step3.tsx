'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation' // Importowanie useRouter
import CheckboxOption from '../../CheckboxOption/CheckboxOption'
import styles from './Step3.module.scss'
import SetUpStepper from '../../SetUpStepper/SetUpStepper'
import { EditIcon } from '../step1/EditIcon'
import Container from '../../Container/Container'
import Button from '../../Button/Button'


const Step3: React.FC = () => {
  const [preferences, setPreferences] = useState<string[]>([])
  const router = useRouter() // Inicjalizacja routera

  const handleCheckboxChange = (value: string) => {
    setPreferences((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    )
  }

  const onNext = () => {
    router.push('/game')
  }

  return (
    <div className={styles.stepContainer}>
      <Container>
      <div className={styles.header}>
        <p className={styles.tourInfo}>
          Tour de
          <span>Kraków</span>
          {/*TODO: */}
        </p>
        <button className={styles.editButton} onClick={() => console.log('asd')}>
          <EditIcon />
        </button>
      </div>

      <div className={styles.title}>Ostatnie kwestie</div>
      <p className={styles.subTitle}>Dotyczące Twoich preferencji</p>

      {/* Preferencje */}
      <div className={styles.preferences}>
      <CheckboxOption
        value="accessible"
        label="Tylko miejsca  przystosowane dla osób z niepełnosprawnością ruchową"
        checked={preferences.includes('accessible')}
        onChange={handleCheckboxChange}
      />
      <CheckboxOption
        value="minimalWalking"
        label="Ogranicz chodzenie do minimum"
        checked={preferences.includes('minimalWalking')}
        onChange={handleCheckboxChange}
      />
      <CheckboxOption
        value="noFood"
        label="Nie chcę nic jeść"
        checked={preferences.includes('noFood')}
        onChange={handleCheckboxChange}
      />
      </div>

      <SetUpStepper progress={100} label="3 z 3 kroków" />

      <Button onClick={onNext} variant="primary" className={styles.nextButton}>
        Let’s goooooooo
      </Button>
      </Container>

    </div>
  )
}

export default Step3
