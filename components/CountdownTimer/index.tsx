import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import calculateTimeLeft from '../../helpers/calculateTimer';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <ul className="flex justify-center">
      <li className={`${styles.timer} ${styles.breath}`}>
        <p className="text-2xl text-white">{timeLeft.days}</p>
        <p className="text-sm">Hari</p>
      </li>
      <li className={`${styles.timer} ${styles.breath}`}>
        <p className="text-2xl text-white">{timeLeft.hours}</p>
        <p className="text-sm">Jam</p>
      </li>
      <li className={`${styles.timer} ${styles.breath}`}>
        <p className="text-2xl text-white">{timeLeft.minutes}</p>
        <p className="text-sm">Menit</p>
      </li>
      <li className={`${styles.timer} ${styles.breath}`}>
        <p className="text-2xl text-white">{timeLeft.seconds}</p>
        <p className="text-sm">Detik</p>
      </li>
    </ul>
  );
};

export default CountdownTimer;