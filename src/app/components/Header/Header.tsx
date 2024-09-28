import React from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';

interface HeaderProps {
  location: string; 
  onChangeLocation: () => void; 
}

const Header: React.FC<HeaderProps> = ({ location, onChangeLocation }) => {
  return (
    <header className={styles.header}>
      <div className={styles.tourInfo}>
        <span>Tour de <strong>{location}</strong></span>
        <Button onClick={onChangeLocation} variant="secondary">
          Zmień
        </Button>
      </div>
    </header>
  );
};

export default Header;
