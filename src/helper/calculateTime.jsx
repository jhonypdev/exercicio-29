/** @format */

const calculateTime = (startDateTime, endDateTime) => {
	const now = new Date();
	const start = new Date(startDateTime);
	const end = new Date(endDateTime);

	let timeLeft = {};
	let isStarted = false;

	if (now >= start && end > now) {
		isStarted = true;
		const difference = end - now;
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / (1000 * 60)) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}

	return { timeLeft, isStarted };
};

export default calculateTime;
