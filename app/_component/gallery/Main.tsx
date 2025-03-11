import React, { useEffect, useMemo, useState } from 'react';
import frame from '@image/gallery/Main_frame.png';
import bottomBG from '@image/gallery/white_paper.png';
import line from '@image/gallery/bottom_line.png';
import Image from "next/image";
import titleBanner from "@image/title.png";
import green from "@image/gallery/pictures/object/green.png";

import forest_1 from '@image/gallery/squre/forest_1.jpg';
import forest_2 from '@image/gallery/squre/forest_2.jpg';
import forest_3 from '@image/gallery/squre/forest_3.jpg';
import forest_4 from '@image/gallery/squre/forest_4.jpg';

function Main({}) {
    const [step, setStep] = useState(0);
    const images = useMemo(() => [forest_1, forest_2, forest_3, forest_4], []);

    // 프리로드
    useEffect(() => {
        images.forEach((img) => {
            const preloadImg = new window.Image();
            preloadImg.src = img.src;
        });
    }, [images]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prevStep) => (prevStep + 1) % images.length);
        }, 1500); // 1초마다 변경

        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <section className="bg-[url('/image/gallery/white_bg.png')] bg-repeat relative flex flex-col items-center pt-16 -mb-16">
            <div className="relative w-full overflow-hidden">
                <Image src={frame} alt="frame" priority={true} className="z-20 w-470 relative " />
                <Image
                    key={step}
                    src={images[step]}
                    alt="forest"
                    quality={70}
                    className="absolute top-45 px-100  w-full left-1/2 transform -translate-x-1/2 z-0"
                    priority={true}
                />
            </div>
            <Image src={green} alt="green" quality={90} className="absolute bottom-140 right-20 z-20" width={100} priority={true} />
            <Image src={bottomBG} alt="bottomBG" className="w-[calc(100%+16px)] h-full -ml-[2px]" priority={true} />
            <Image src={line} alt="line" className="absolute -bottom-11 z-10" priority={true} />
            <Image src={titleBanner} alt="titleBanner" className="absolute -bottom-110 z-20" priority={true} width={280} />
            <div className="z-30 absolute bottom-62 leading-[140%] text-center">
                2025년 4월 12일 (토요일)<br />
                오후 12시 20분 <br /><br />
                아시아드 시티 웨딩홀 (마리아주홀)
            </div>
        </section>
    );
}

export default Main;