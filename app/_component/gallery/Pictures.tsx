"use client";

import React, {useState} from 'react';
import Image from "next/image";
import paperRip from '@image/gallery/pictures/object/paper_rip.png';
import Studio from "./Studio";
import Forest from "./Forest";
import Sea from "./Sea";
import Portal from "../Portal";
import usePortal from "../../_hook/usePortal";
import Swiper from "./Swiper";
import More from "./More";
import Night from "./Night";
import arrow from '@image/gallery/arrow.png';
import jieun from "@image/gallery/jieun-2.png";
import donghun from "@image/gallery/donghun.png";
import sticker from "@image/gallery/hearts.png";
import nameTagJ from "@image/gallery/nameTag_jieun.png";
import nameTagD from "@image/gallery/nameTag_donghun.png";

function Pictures({}) {
    const {isPortalOpen, handleClosePortal, handleOpenPortal} = usePortal();
    const [selectedPicture, setSelectedPicture] = useState<number | null>(null);
    const [isOpenMore, setIsOpenMore] = useState<boolean>(false);

    const handleSelectPicture = ({index}: { index: number }) => {
        handleOpenPortal();
        setSelectedPicture(index);
    };

    const handleOpenMore = () => {
        setIsOpenMore(true);
    };

    return (
        <section className="bg-[url('/image/gallery_bg.png')] bg-repeat relative pt-90 pb-60 flex flex-col items-center">
            <div className={`w-full bg-repeat relative flex flex-col items-center h-580`}>
                <article className={`w-full h-full relative  flex justify-center pb-60 max-w-320 `}>
                    <div className={' h-300'}>
                        <Image src={jieun} alt={'jieun'} className={'absolute -left-74 h-380 object-contain '} priority={true}/>

                        <Image src={donghun} alt={'donghun'} className={'absolute -right-65 h-380 object-contain'} priority={true}/>
                    </div>
                    <div className={'flex flex-col items-center w-full'}>
                        <Image src={sticker} alt={'sticker'} width={60} className={'pt-100 top-50 animate-bounce'}
                               priority={true}/>
                        <div className={'flex items-center justify-center gap-x-65  pt-[220px]'}>
                            <Image src={nameTagJ} alt={'nameTag'} width={97} className={''} priority={true}/>
                            <Image src={nameTagD} alt={'nameTag'} width={97} className={''} priority={true}/>
                        </div>
                    </div>

                </article>
                <Image src={paperRip} alt="paperRip" className="absolute bottom-40 w-full"/>
            </div>

            <Forest handleSelectPicture={handleSelectPicture}/>
            <Sea handleSelectPicture={handleSelectPicture}/>
            {!isOpenMore && <More handleOpenMore={handleOpenMore}/>}


            {/* 애니메이션 효과를 위한 컨테이너 */}
            <div className="w-full overflow-hidden transition-all duration-500"
                 style={{maxHeight: isOpenMore ? '100%' : '0px'}}>
                <Night handleSelectPicture={handleSelectPicture}/>
                <Studio handleSelectPicture={handleSelectPicture}/>
                <Info/>
            </div>

            <Portal isOpen={isPortalOpen} onClose={handleClosePortal}>
                <div className="w-full max-w-470 h-full">
                    <Swiper selectedPicture={selectedPicture} handleClosePortal={handleClosePortal}/>
                </div>
            </Portal>
        </section>
    );
}

export default Pictures;

const Info = () => {
    return (
        <article className={'w-full h-full text-center mt-60 flex flex-col items-center relative'}>
            <div className={'font-rawrote text-36 text-light-yellow absolute -top-60 left-60 -rotate-[15deg]'}
               style={{ textShadow: '1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000' }}
            >Thank you!</div>
            <p className={'text-20 font-bold mb-6'}>감사합니다.</p>
            <p>자세한 정보는&nbsp;
                <span className="bg-light-yellow">예식정보 바로가기</span>를 눌러주세요.</p>
            <Image src={arrow} alt={'arrow'} height={50}/>
        </article>
    )
}