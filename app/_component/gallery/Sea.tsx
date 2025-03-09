import React from 'react';
import sea_1 from "@image/gallery/pictures/sea_1.jpeg";
import sea_2 from "@image/gallery/pictures/sea_2_donghun.jpg";
import sea_3 from "@image/gallery/pictures/sea_3.jpeg";
import sea_4 from "@image/gallery/pictures/sea_4_wide.jpeg";
import Image from "next/image";
import sea_5 from "@image/gallery/pictures/sea_5.jpg";
import sea_6 from "@image/gallery/pictures/sea_6_jieun.jpg";
import Plot from "./Plot";

function Sea({}) {
    return (
        <article className={'w-full h-full max-w-390 relative'}>
            <Plot className={'h-[440px]'}>
                <Image src={sea_5} alt={'sea_1'} width={250} className={'absolute -left-20 -top-30 z-[5]'}/>
                <Image src={sea_1} alt={'sea_2'} width={200} className={'absolute -right-20 rotate-[5deg] top-170'}/>
            </Plot>
            <Plot>
                <Image src={sea_2} alt={'sea_3'} width={200} className={'absolute right-0 top-20'}/>
                <Image src={sea_3} alt={'sea_4'} width={200} className={'absolute -left-20 top-170'}/>
            </Plot>

        </article>
    );
}

export default Sea;