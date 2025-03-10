import React from 'react';
import more from '@image/gallery/pictures/object/more.png'
import Image from "next/image";
import paperRip from '@image/gallery/pictures/object/paper_rip.png';

function More({handleOpenMore}:{
    handleOpenMore: () => void
}) {
    return (
        <article className={'flex flex-col items-center'}>
            <Image src={paperRip} alt={'paperRip'} className={'-ml-2'}/>
            <Image src={more} alt={'more'} width={180} onClick={handleOpenMore}/>
        </article>
    );
}

export default More;