import React from 'react';
import Image from "next/image";
import titleBanner from '@image/title.png';
import Intro from "./Intro";

function GalleryMain({}) {
    return (
        <section className="w-full h-full min-h-dvh px-48 relative bg-[url('/image/gallery_bg.png')] bg-repeat">
            <Image src={titleBanner} alt={'titleBanner'} className={'pt-40'}/>
            <Intro/>
        </section>
    );
}

export default GalleryMain;