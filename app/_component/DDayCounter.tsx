import React, { useState, useEffect } from 'react';
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

    return (
        <div className="text-center">
            <div className="text-2xl">
                <span>{timeLeft.days}일 </span>
                <span>{String(timeLeft.hours).padStart(2, '0')}시간 </span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}분 </span>
                <span>{String(timeLeft.seconds).padStart(2, '0')}초</span>
            </div>
        </div>
    );
}

export default DDayCounter;