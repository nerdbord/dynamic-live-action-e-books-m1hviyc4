'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation' // Importowanie useRouter
import CheckboxOption from '../../CheckboxOption/CheckboxOption'
import styles from './Step3.module.scss'
import SetUpStepper from '../../SetUpStepper/SetUpStepper'
import { EditIcon } from '../step1/EditIcon'


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

      <h2 className={styles.title}>Ostatnie kwestie</h2>
      <p className={styles.subTitle}>Dotyczące Twoich preferencji</p>

      {/* Preferencje */}

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

      <SetUpStepper progress={100} label="3 z 3 kroków" />
      <button onClick={onNext} className={styles.nextButton}>
        Let’s goooooooo
      </button>
    </div>
  )
}

export default Step3
