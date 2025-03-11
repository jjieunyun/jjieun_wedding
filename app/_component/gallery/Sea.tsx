import React from 'react';
import Image from "next/image";
import Plot from "./Plot";
import {PictureList} from "../../_data/PictureList";
import pinkPaper from '@image/gallery/pictures/object/pink_paper.png';
import ribbon from '@image/gallery/pictures/object/ribbon.png';
import red from '@image/gallery/red_tape.png';
import smile from '@image/gallery/pictures/object/smile.png';
import white_heart from '@image/gallery/pictures/object/white_heart.png';

function Sea({handleSelectPicture}: {
    handleSelectPicture: ({index}: { index: number }) => void
}) {

    const pictures = PictureList.find(item => item.type === 'sea')?.items || [];
    return (
        <article className={'w-full h-full max-w-390 relative'}>
            <Plot className={'h-[530px]'}>
                <Image src={red} alt={'red'} width={50} className={'absolute -top-60 left-80 rotate-[75deg] z-10'}/>
                <Image src={pictures[5].src} alt={pictures[5].label} width={250}
                       quality={50}
                       onClick={ () => handleSelectPicture({index: pictures[5].id})}
                       className={'absolute -left-10 -top-30 z-[5] -rotate-[5deg]'}/>
                <Image src={pictures[1].src} alt={pictures[1].label} width={250}
                       quality={50}
                       onClick={ () => handleSelectPicture({index: pictures[1].id})}
                       className={'absolute -right-20 rotate-[5deg] top-190 z-[4]'}/>
                <Image src={ribbon} alt={'wedding'} quality={90} width={120} className={'absolute -right-0 top-20 z-10'}/>
                <Image src={smile} alt={'wedding'} quality={90} width={60} className={'absolute -right-0 -top-5 z-10'}/>
                <Image src={pinkPaper} alt={'pinkPaper'} quality={90} width={250} className={'absolute -right-40 top-0 -z-1'}/>
            </Plot>
            <Plot className={'h-300'}>
                <Image src={white_heart} alt={'white_heart'} quality={90} width={120} className={'absolute -left-0 -top-140'}/>

                <Image src={pictures[2].src} alt={pictures[2].label} width={220}
                       quality={50}
                       onClick={ () => handleSelectPicture({index: pictures[2].id})}
                       className={'absolute left-10 top-0 -rotate-[5deg]'}/>
            </Plot>
            <Plot className={'h-220'}>
                <Image src={pictures[3].src} alt={pictures[4].label} width={350}
                       quality={50}
                       onClick={ () => handleSelectPicture({index: pictures[3].id})}
                       className={'absolute right-0 rotate-[5deg]'}/>
            </Plot>


        </article>
    );
}

export default Sea;