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
    const {isPortalOpen, handleClosePortal} = usePortal();
    const [selectedPicture, setSelectedPicture] = useState<number | null>(null);

    const handleSelectPicture = ({index}: { index: number }) => {
        setSelectedPicture(index);
    }

    return (
        <section className={`bg-[url('/image/gallery_bg.png')] bg-repeat relative py-50 flex flex-col items-center`}>
            <Image src={paperRip} alt={'paperRip'} className={'absolute -top-34 -left-4'}/>
            <Studio/>
            <Forest/>
            <Sea/>
            <Portal isOpen={isPortalOpen} onClose={handleClosePortal}>
                <Swiper selectedPicture={selectedPicture}/>
            </Portal>

        </section>
    );
}

export default Pictures;

