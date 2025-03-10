import React from 'react';
import Image from "next/image";
import Plot from "./Plot";
import {PictureList} from "../../_data/PictureList";

function Sea({handleSelectPicture}: {
    handleSelectPicture: ({index}: { index: number }) => void
}) {

    const pictures = PictureList.find(item => item.type === 'sea')?.items || [];
    return (
        <article className={'w-full h-full max-w-390 relative'}>
            <Plot className={'h-[440px]'}>
                <Image src={pictures[5].src} alt={pictures[5].label} width={250}
                       quality={50}
                       onClick={ () => handleSelectPicture({index: pictures[5].id})}
                       className={'absolute -left-20 -top-30 z-[5]'}/>
                <Image src={pictures[1].src} alt={pictures[1].label} width={200}
                       quality={50}
                       onClick={ () => handleSelectPicture({index: pictures[1].id})}
                       className={'absolute -right-20 rotate-[5deg] top-170'}/>
            </Plot>
            <Plot className={'h-270'}>
                <Image src={pictures[2].src} alt={pictures[2].label} width={200}
                       quality={50}
                       onClick={ () => handleSelectPicture({index: pictures[2].id})}
                       className={'absolute left-10 top-0'}/>
            </Plot>
            <Plot className={'h-180'}>
                <Image src={pictures[3].src} alt={pictures[4].label} width={250}
                       quality={50}
                       onClick={ () => handleSelectPicture({index: pictures[3].id})}
                       className={'absolute right-0 rotate-[5deg]'}/>
            </Plot>


        </article>
    );
}

export default Sea;