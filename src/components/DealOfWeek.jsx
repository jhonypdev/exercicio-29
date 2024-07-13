/** @format */

import TimerItem from "./TimerItem/TimerItem";
import { useState, useEffect } from "react";
import useDeals from "../hooks/useDeals";
import calculateTime from "../helper/calculateTime";
import Button from "./Button/Button";
import Container from "./Container/Container";
import Image from "./Image/Image";

const DealOfWeek = () => {
	const { deals, loading, error } = useDeals();
	const [timeLeft, setTimeLeft] = useState(null);
	const [isStarted, setIsStarted] = useState(false);

	useEffect(() => {
		if (deals && deals.length > 0) {
			const ofertaSemanal = deals.find((oferta) => oferta.semanal);
			if (ofertaSemanal && ofertaSemanal.semanal.length > 0) {
				const oferta = ofertaSemanal.semanal[0];
				const { startDate, startTime, endDate, endTime } = oferta;
				const startDateTime = `${startDate}T${startTime}`;
				const endDateTime = `${endDate}T${endTime}`;

				const { timeLeft, isStarted } = calculateTime(
					startDateTime,
					endDateTime,
				);
				setTimeLeft(timeLeft);
				setIsStarted(isStarted);

				const timer = setInterval(() => {
					const { timeLeft, isStarted } = calculateTime(
						startDateTime,
						endDateTime,
					);
					setTimeLeft(timeLeft);
					setIsStarted(isStarted);
				}, 1000);

				return () => clearInterval(timer);
			}
		}
	}, [deals]);

	if (loading) {
		return <div>Crregando...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	

	const ofertaSemanal = deals.find((oferta) => oferta.semanal);
	

	const deal = ofertaSemanal.semanal[0];

	if (!isStarted||ofertaSemanal.semanal.length === 0) {
		return null;
	}

	return (
		<div className="w-full mt-10 bg-[#f2f2f2] relative" id="deal">
			<Container>
				<div className="row items-center">
					<div className="">
						<div className="h-[500px]">
							<Image src={deal.image} alt={deal.title} />
						</div>
					</div>
					<div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full">
						<div className="relative top-auto left-auto md:h-full h-auto items-center">
							<div className="inline-block text-center after">
								<h2 className="inline-block text-white md:text-slate-950 md:text-shadow-hidden text-shadow h2">
									Oferta da Semana
								</h2>
							</div>
							<ul className="mt-16">
								{timeLeft &&
									timeLeft.days !== undefined &&
									timeLeft.days !== 0 && (
										<TimerItem timer={timeLeft.days} timerUni="Dias" />
									)}
								{timeLeft &&
									timeLeft.hours !== undefined &&
									timeLeft.hours !== 0 && (
										<TimerItem timer={timeLeft.hours} timerUni="Horas" />
									)}
								{timeLeft &&
									timeLeft.minutes !== undefined &&
									timeLeft.minutes !== 0 && (
										<TimerItem timer={timeLeft.minutes} timerUni="min" />
									)}
								{timeLeft &&
									timeLeft.seconds !== undefined &&
									timeLeft.seconds !== 0 && (
										<TimerItem timer={timeLeft.seconds} timerUni="sec" />
									)}
							</ul>
							<Button variant="dark" className="mt-12">
								Adicionar ao carrinho
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default DealOfWeek;
