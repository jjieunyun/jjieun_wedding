import React, { useState, useEffect } from 'react';
import { PictureList } from "../../_data/PictureList";
import { Swiper as SwiperSlider, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper'; // Swiper 인스턴스 타입 import
import Image from "next/image";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import arrow from '@image/design_arrow.png';
import icClose from '@image/ic-close-with-circle.svg';

function Swiper({ selectedPicture, handleClosePortal }: {
    selectedPicture: number | null;
    handleClosePortal: () => void;
}) {
    const allPictures = PictureList.flatMap(group => group.items);
    const initialSlideIndex = selectedPicture !== null ? selectedPicture : 0;
    const [currentSlide, setCurrentSlide] = useState(initialSlideIndex);
    // Swiper 인스턴스의 타입을 명시적으로 지정
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

    // selectedPicture 변경 시 slideTo 호출
    useEffect(() => {
        if (swiperInstance && selectedPicture !== null) {
            swiperInstance.slideTo(selectedPicture);
            setCurrentSlide(selectedPicture);
        }
    }, [selectedPicture, swiperInstance]);

    const handlePrev = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };

    return (
        <section className="w-[100dvw] max-w-[470] relative">
            <div>
                <button onClick={handleClosePortal}
                        className="w-full flex justify-end fixed z-20 right-24 top-24">
                    <div className={'w-30 h-30 bg-[#161618] opacity-50 rounded-full flex justify-center items-center'}>
                        <Image src={icClose} alt={'close'} width={30} height={30}/>
                    </div>

                </button>
            </div>
            <SwiperSlider
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={false}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                initialSlide={initialSlideIndex}
                className="w-full h-full"
            >
                {allPictures.map((picture, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                        <div className="w-full h-full">
                            <Image
                                src={picture.src}
                                alt={picture.label}
                                style={{objectFit: 'contain'}}
                            />
                        </div>
                    </SwiperSlide>
                ))}

                <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-360 flex justify-between px-64 items-center mt-12 mb-8">
                        <div onClick={handlePrev} className="cursor-pointer">
                            <Image
                                src={arrow}
                                alt="arrow"
                                width={40}
                                height={40}
                                className="w-40 h-40"
                            />
                        </div>
                        <div className="text-light-yellow text-center text-14">
                            {currentSlide + 1} / {allPictures.length}
                        </div>
                        <div onClick={handleNext} className="cursor-pointer">
                            <Image
                                src={arrow}
                                alt="arrow"
                                width={40}
                                height={40}
                                quality={50}
                                className="rotate-180 w-40 h-40"
                            />
                        </div>
                    </div>

                </div>
            </SwiperSlider>
        </section>
    );
}

export default Swiper;