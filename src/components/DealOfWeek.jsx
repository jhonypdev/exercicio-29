/** @format */

import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import TimerItem from "./TimerItem";
import { calculateTime } from "../helper/calculateTime";
import { useState, useEffect } from "react";

const DealOfWeek = () => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTime("2024-07-11T13:00:00")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime("2024-07-18T04:00:00"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mt-10 bg-[#f2f2f2] relative">
      <Container>
        <div className="row items-center">
          <div className="">
            <div className="h-[500px]">
              <img
                src="/images/deal_ofthe_week.png"
                alt=""
                className="h-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center absolute  top-0 left-0 w-full h-full">
            <div className="relative top-auto left-auto md:h-full h-auto items-center">
              <div className="inline-block text-center after">
                <h2 className="inline-block text-white md:text-slate-950 md:text-shadow-hidden text-shadow h2 ">
                  Deal Of The Week
                </h2>
              </div>
              <ul className="mt-16">
                {timeLeft.days !== undefined && timeLeft.days !== 0 && (
                  <TimerItem timer={timeLeft.days} timerUni="Dias" />
                )}
                {timeLeft.hours !== undefined && timeLeft.hours !== 0 && (
                  <TimerItem timer={timeLeft.hours} timerUni="Horas" />
                )}
                {timeLeft.minutes !== undefined && timeLeft.minutes !== 0 && (
                  <TimerItem timer={timeLeft.minutes} timerUni="min" />
                )}
                {timeLeft.seconds !== undefined && timeLeft.seconds !== 0 && (
                  <TimerItem timer={timeLeft.seconds} timerUni="sec" />
                )}
              </ul>
              <Button className="w-36 bg-slate-950 border-none mt-12 hover:bg-[#fe4c50]">
                <a
                  href="#topo"
                  className="block text-white uppercase text-sm font-semibold text-center w-full"
                >
                  Shop Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DealOfWeek;
