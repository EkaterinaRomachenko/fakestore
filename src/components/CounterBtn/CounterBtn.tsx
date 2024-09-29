import React, { FC } from 'react';
import styles from './counterBtn.module.css';
import { HiMiniPlus, HiMinusSmall } from 'react-icons/hi2';

const CounterBtn: FC = () => {
  return (
    <div className={styles.counterBtn}>
      <HiMinusSmall className={styles.counterBtn__icon} size={20} />
      <input  className={styles.counterBtn__input} value="1" />
      <HiMiniPlus className={styles.counterBtn__icon} size={20} />
    </div>
  );
};

export default CounterBtn;
