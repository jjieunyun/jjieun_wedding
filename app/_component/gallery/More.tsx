import React from 'react';
import more from '@image/gallery/pictures/object/more.png'
import Image from "next/image";
import paperRip from '@image/gallery/pictures/object/paper_rip.png';

function More({handleOpenMore}:{
    handleOpenMore: () => void
}) {
    return (
        <article className={'flex flex-col items-center relative'}>
            <Image src={paperRip} alt={'paperRip'} className={'-ml-2'}/>
            <p onClick={handleOpenMore}
               style={{
                   textShadow: ` -1px -1px 0 #000,
                           1px -1px 0 #000,
                          -1px  1px 0 #000,
                           1px  1px 0 #000 `,
               }}
               className={'absolute top-90 text-light-yellow font-bold '}>더보기</p>
            <Image src={more} alt={'more'} width={180}  onClick={handleOpenMore} className={'animate-tilt mt-40'}/>

        </article>
    );
}

export default More;