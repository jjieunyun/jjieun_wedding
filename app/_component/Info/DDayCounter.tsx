"use client";

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { motion, AnimatePresence } from "framer-motion";

dayjs.extend(duration);

const targetDate = dayjs("2025-04-12T12:20:00");

function DDayCounter() {
    const [mounted, setMounted] = useState(false);
    const calculateTimeLeft = () => {
        const now = dayjs();
        const diff = targetDate.diff(now);

        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const d = dayjs.duration(diff);
        return {
            days: Math.floor(d.asDays()),
            hours: d.hours(),
            minutes: d.minutes(),
            seconds: d.seconds(),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null;

    const hours = String(timeLeft.hours).padStart(2, "0");
    const minutes = String(timeLeft.minutes).padStart(2, "0");
    const seconds = String(timeLeft.seconds).padStart(2, "0");

    // 위에서 아래로 떨어지는 효과를 위한 애니메이션 옵션
    const dropAnimation = {
        initial: { y: "-100%", opacity: 0 },
        animate: { y: "0%", opacity: 1 },
        exit: { y: "100%", opacity: 0 },
        transition: { duration: 0.5, ease: "easeInOut" },
    };

    return (
        <div className="text-center py-16 pb-20">
            <div className="text-wedding-red">
                <div className="p-8">
                    <span className="text-48">D-{timeLeft.days}</span>
                </div>
                <div className="flex justify-center">
                    {/* Hours */}
                    <div>
                        <div className="text-32 font-600 leading-[92%]">
                            <div style={{ height: "2.5rem", overflow: "hidden" }}>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={hours}
                                        style={{ display: "inline-block" }}
                                        {...dropAnimation}
                                    >
                                        {hours}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="font-[250] mt-2">hour</div>
                    </div>
                    <div className="px-24">:</div>
                    {/* Minutes */}
                    <div>
                        <div className="text-32 font-600 leading-[92%]">
                            <div style={{ height: "2.5rem", overflow: "hidden" }}>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={minutes}
                                        style={{ display: "inline-block" }}
                                        {...dropAnimation}
                                    >
                                        {minutes}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="font-[250] mt-2">min</div>
                    </div>
                    <div className="px-24">:</div>
                    {/* Seconds */}
                    <div>
                        <div className="text-32 font-600 leading-[92%]">
                            <div style={{ height: "2.5rem", overflow: "hidden" }}>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={seconds}
                                        style={{ display: "inline-block" }}
                                        {...dropAnimation}
                                    >
                                        {seconds}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="font-[250] mt-2">sec</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DDayCounter;