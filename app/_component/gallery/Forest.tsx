import React from 'react';
import Plot from "./Plot";
import forest_1 from "@image/gallery/pictures/forest_1.jpeg";
import forest_2 from "@image/gallery/pictures/forest_2.jpeg";
import forest_3 from "@image/gallery/pictures/forest_3.jpeg";
import forest_4 from "@image/gallery/pictures/forest_4.jpeg";
import Image from "next/image";

function Forest({}) {
    return (
        <article className={'w-full h-full max-w-390 relative'}>
           <Plot className={'h-[400px]'}>
               <Image src={forest_1} alt={'forest_1'} width={250} className={'absolute rotate-[10deg]'}/>
                <Image src={forest_2} alt={'forest_2'} width={200} className={'absolute -right-30 -rotate-[5deg]  top-170'}/>
           </Plot>
            <Plot className={'h-500'}>
                <Image src={forest_3} alt={'forest_3'} width={220} className={'absolute  top-20 rotate-[5deg]'}/>
                <Image src={forest_4} alt={'forest_4'} width={200} className={'absolute right-5 top-200 rotate-[3deg] z-10'}/>
            </Plot>
        </article>
    );
}

export default Forest;