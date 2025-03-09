import React from 'react';
import Image from "next/image";
import paperRip from '@image/gallery/pictures/object/paper_rip.png';
import Studio from "./Studio";
import Forest from "./Forest";
import Sea from "./Sea";


function Pictures({}) {
    return (
        <section className={`bg-[url('/image/gallery_bg.png')] bg-repeat relative py-50 flex flex-col items-center`}>
            <Image src={paperRip} alt={'paperRip'} className={'absolute -top-34 -left-4'}/>
            <Studio/>
            <Forest/>
            <Sea/>

        </section>
    );
}

export default Pictures;

