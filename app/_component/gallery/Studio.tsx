import React from 'react';
import Image from "next/image";
import studio_1 from "@image/gallery/pictures/studio_1.jpg";
import studio_2 from "@image/gallery/pictures/studio_2.jpeg";
import studio_3 from "@image/gallery/pictures/studio_3.jpeg";
import studio_4 from "@image/gallery/pictures/studio_4.jpeg";
import studio_5 from "@image/gallery/pictures/studio_5.jpeg";
import studio_6 from "@image/gallery/pictures/studio_6.jpeg";
import studio_7 from "@image/gallery/pictures/studio_7_jieun.jpg";
import studio_8 from "@image/gallery/pictures/studio_8_donghun.jpg";
import studio_9 from "@image/gallery/pictures/studio_9.jpg";
import Plot from "./Plot";

function Studio({}) {
    return (
        <article className={'w-full max-w-390'}>
            <Plot>
                <Image src={studio_1} alt={'studio_1'} width={250} className={' rotate-[10deg]'}/>
                <Image src={studio_2} alt={'studio_2'} width={180}
                       className={'absolute right-0 rotate-[5deg] top-170'}/>
            </Plot>
            <Plot className={'pt-40 '}>
                <Image
                    src={studio_3}
                    alt={'studio_3'}
                    width={200}
                    className={' ml-16 absolute z-10 '}
                />
                <Image
                    src={studio_4}
                    alt={'studio_4'}
                    width={230}
                    className={'absolute right-0 top-240'}
                />
                <div className="invisible h-500"></div>
            </Plot>
            <Plot className={'h-400'}>
                <Image src={studio_5} alt={'studio_5'} width={200} className={' absolute -top-50 -rotate-[8deg]'}/>
                <Image src={studio_6} alt={'studio_6'} width={190} className={' absolute right-10 top-80 rotate-[8deg] z-10'}/>
            </Plot>
            <Plot className={'h-650'}>
                <Image src={studio_7} alt={'studio_7'} width={230} className={' absolute -top-100 -left-20'}/>
                <Image src={studio_8} alt={'studio_8'} width={220} className={' absolute -right-20 top-20 rotate-[9deg]'}/>
                <Image src={studio_9} alt={'studio_9'} width={260} className={' absolute left-0 top-300'}/>
            </Plot>
        </article>
    );
}

export default Studio;