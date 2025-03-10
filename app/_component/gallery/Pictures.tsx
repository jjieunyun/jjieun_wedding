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


function Pictures({}) {
    const {isPortalOpen, handleClosePortal, handleOpenPortal} = usePortal();
    const [selectedPicture, setSelectedPicture] = useState<number | null>(null);

    const handleSelectPicture = ({index}: { index: number }) => {
        handleOpenPortal();
        setSelectedPicture(index);
    }


    return (
        <section className={`bg-[url('/image/gallery_bg.png')] bg-repeat relative py-50 flex flex-col items-center`}>
            <Image src={paperRip} alt={'paperRip'} className={'absolute -top-34 -left-4'}/>
            <Forest handleSelectPicture={handleSelectPicture}/>
            <Sea handleSelectPicture={handleSelectPicture}/>
            {/*<Studio/>*/}
            <Portal isOpen={isPortalOpen} onClose={handleClosePortal}>
                <div className={'w-full max-w-470 h-full '}>
                    <Swiper selectedPicture={selectedPicture} handleClosePortal={handleClosePortal}/>
                </div>

            </Portal>

        </section>
    );
}

export default Pictures;

