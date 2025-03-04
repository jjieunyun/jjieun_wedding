"use client";

import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const targetDate = dayjs('2025-04-12T12:20:00');

function DDayCounter() {
    const calculateTimeLeft = () => {
        const now = dayjs();
        const diff = targetDate.diff(now);

        if (diff <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const duration = dayjs.duration(diff);

        return {
            days: Math.floor(duration.asDays()),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = String(timeLeft.hours).padStart(2, '0');
    const minutes = String(timeLeft.minutes).padStart(2, '0');
    const seconds = String(timeLeft.seconds).padStart(2, '0');

    return (
        <div className="text-center">
            <div className="text-wedding-red">
                <div className={'p-8'}>
                    <span className={'text-48'}>D-{timeLeft.days} </span>
                </div>
                <div className={'flex justify-center'}>
                    <div>
                        <div className={'text-32 font-600 leading-[92%]'}>{hours}</div>
                        <div>hour</div>
                    </div>
                    <div className={'px-24'}>
                        :
                    </div>
                    <div>
                        <div className={'text-32 font-600 leading-[92%]'}>{minutes}</div>
                        <div>min</div>
                    </div>
                    <div className={'px-24'}>
                        :
                    </div>
                    <div>
                        <div className={'text-32 font-600 leading-[92%]'}>{seconds}</div>
                        <div>sec</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DDayCounter;