const calculateTime = (startDateTime, endDateTime) => {
  console.log(startDateTime, endDateTime, "os parametros recebidos");

  const difference = endDateTime - startDateTime;
  console.log(difference);
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  console.log(timeLeft);
  return timeLeft;
};

export default calculateTime;
