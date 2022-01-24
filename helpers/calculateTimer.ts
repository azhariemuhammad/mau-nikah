interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const calculateTimeLeft = () => {
  const year = new Date().getFullYear();
  let difference = +new Date(`10/01/${year}`) - +new Date();

  let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default calculateTimeLeft;
