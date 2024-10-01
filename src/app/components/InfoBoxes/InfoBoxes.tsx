import React from 'react';
import styles from './InfoBoxes.module.scss';

interface InfoBox {
  value: number;
  label: string;
  unit: string;
}

interface InfoBoxesProps {
  data: InfoBox[];
  onEdit: (index: number) => void;
}

const InfoBoxes: React.FC<InfoBoxesProps> = ({ data, onEdit }) => {
  console.log(onEdit)
  return (
    <div className={styles.infoBoxes}>
      {data.map((box, index) => (
        <div key={index} className={styles.box}>
          <span className={styles.value}>{box.value}</span>
          <span className={styles.label}>{box.label}</span>
          <span className={styles.unit}>{box.unit}</span>
          {/* <button className={styles.editButton} onClick={() => onEdit(index)}>Edytuj</button> */}
        </div>
      ))}
    </div>
  );
};

export default InfoBoxes;
