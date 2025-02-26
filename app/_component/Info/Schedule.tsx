import React from 'react';
import IcHeart from '@image/ic-heart.svg';
import Image from "next/image";
import DDayCounter from "../DDayCounter";

const dayLabels = ['일', '월', '화', '수', '목', '금', '토'];

const calendarData = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, null, null, null],
];

function Schedule() {
    return (
        <section className="mt-40 pb-114 p-24">
            <article>
                <p className="text-32 font-semibold text-center mb-12">2025.4.12</p>
                <p className="font-300 mb-8 text-center">토요일 낮 12시 20분에 뵐게요!</p>
            </article>

            {/* 달력 테이블 */}
            <article className="w-full h-full p-12 pb-24 border-b-1 border-[#EFEFEF]">
                <div className="w-full text-center">
                    <div className="w-full flex">
                        {dayLabels.map((label) => (
                            <div key={label} className="font-light h-40 w-full flex justify-center items-center">
                                {label}
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full flex-col">
                        {calendarData.map((week, weekIndex) => (
                            <div key={weekIndex} className="flex w-full">
                                {week.map((day, dayIndex) => {
                                    const isHighlight = day === 12;
                                    const isDayRed = dayLabels[dayIndex] === '일';

                                    return (
                                        <div
                                            key={dayIndex}
                                            className={`relative flex justify-center items-center w-full h-40 text-14
                                                ${isDayRed ? 'text-[#C4282D]' : ''}
                                                ${isHighlight ? 'text-white font-bold' : ''}`}
                                        >
                                            {isHighlight && (
                                                <Image
                                                    src={IcHeart}
                                                    alt="Heart Icon"
                                                    className="absolute w-33 h-31"
                                                />
                                            )}
                                            <span className="relative z-10">{day || ''}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </article>

            <DDayCounter/>
        </section>
    );
}

export default Schedule;