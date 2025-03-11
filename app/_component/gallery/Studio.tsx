import React from 'react';
import Image from "next/image";
import redTape from '@image/gallery/red_tape.png'
import bird from '@image/bird.png';
import bluePaper from '@image/gallery/pictures/object/blue_paper.png';
import flowerPaper from '@image/gallery/pictures/object/flower_paper.png';
import blackHeart from '@image/gallery/pictures/object/black_heart.png';
import letterPaper from '@image/gallery/pictures/object/letter.png'
import love from '@image/gallery/pictures/object/love_paper.png';
import loveHeart from '@image/gallery/pictures/object/red_heart.png';

import Plot from "./Plot";
import {PictureList} from "../../_data/PictureList";

function Studio({handleSelectPicture}: {
    handleSelectPicture: ({index}: { index: number }) => void
}) {
    const pictures = PictureList.find(item => item.type === 'studio')?.items || [];

    return (
        <article className="w-full h-full max-w-390 relative">
            <Plot className={'h-550'}>
                <Image src={pictures[0].src} alt={pictures[0].label} width={250}
                       onClick={() => handleSelectPicture({index: pictures[0].id})}
                       className={'absolute rotate-[10deg] top-10 z-[4]'}/>
                <Image src={pictures[1].src} alt={pictures[1].label} width={230}
                       onClick={() => handleSelectPicture({index: pictures[1].id})}
                       className={'absolute -right-40 -rotate-[5deg] top-270 z-[5]'}/>
                <Image src={bird} alt={'bird'} width={105} className={'absolute right-0 top-150 rotate-[5deg] animate-tilt'}/>
                <Image src={redTape} alt={'redTape'} width={50} className={'absolute right-50 top-250 rotate-[75deg] z-10'}/>
                <Image src={bluePaper} alt={'bluePaper'} width={250} className={'absolute -left-40 top-220'}/>
            </Plot>
            <Plot className={'pt-40 h-700'}>
                <Image
                    src={pictures[2].src}
                    alt={pictures[2].label}
                    width={220}
                    onClick={() => handleSelectPicture({index: pictures[2].id})}
                    className={'absolute ml-16 z-10 -rotate-[7deg]'}
                />
                <Image
                    src={pictures[3].src}
                    alt={pictures[3].label}
                    width={230}
                    onClick={() => handleSelectPicture({index: pictures[3].id})}
                    className={'absolute right-0 top-320 z-[4] rotate-[5deg]'}
                />
                <Image src={flowerPaper} alt={'flowerPaper'} width={380} className={'absolute -left-0 top-140'}/>
                <Image src={blackHeart} alt={'blackHeart'} width={120} className={'absolute -right-0 top-650'}/>

            </Plot>
            <Plot className={'h-650'}>
                <Image src={letterPaper} alt={'letter'} width={160} className={'absolute -left-20 top-260'}/>
                <Image src={pictures[4].src} alt={pictures[4].label} width={220}
                       onClick={() => handleSelectPicture({index: pictures[4].id})}
                       className={' absolute -top-50 -left-5 -rotate-[8deg]'}/>
                <Image src={pictures[5].src} alt={pictures[5].label} width={230}
                       onClick={() => handleSelectPicture({index: pictures[5].id})}
                       className={' absolute -right-5 top-240 rotate-[8deg] z-10'}/>

            </Plot>
            <Plot className={'h-880'}>
                <Image src={pictures[6].src} alt={pictures[6].label} width={250}
                       onClick={() => handleSelectPicture({index: pictures[6].id})}
                       className={' absolute -top-100 -left-20 -rotate-[7deg] z-10'}/>
                <Image src={pictures[7].src} alt={pictures[7].label} width={230}
                       onClick={() => handleSelectPicture({index: pictures[7].id})}
                       className={' absolute -right-40 top-180 rotate-[9deg] z-[4]'}/>
                <Image src={pictures[8].src} alt={pictures[8].label} width={260}
                       onClick={() => handleSelectPicture({index: pictures[8].id})}
                       className={' absolute left-0 top-490 -rotate-[8deg] z-5'}/>
                <Image src={love} alt={'love'} width={250} className={'absolute -right-40 top-0'}/>
                <Image src={loveHeart} alt={'loveHeart'} width={120} className={'absolute right-20 top-600'}/>
            </Plot>
        </article>
    );
}

export default Studio;