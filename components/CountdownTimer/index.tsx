import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import calculateTimeLeft from '../../helpers/calculateTimer';

interface CountDownTimerProps {
  eventDate: string;
}
const CountdownTimer = ({ eventDate }: CountDownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));
  const isLive = Number(new Date(eventDate)) < Number(new Date());
  useEffect(() => {
    if (isLive) return;
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (isLive) return null;

  return (
    <div className="py-5">
      <ul className="flex justify-center">
        <li className={`bg-rose-400 ${styles.timer} ${styles.breath}`}>
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
    </div>
  );
};

export default CountdownTimer;
