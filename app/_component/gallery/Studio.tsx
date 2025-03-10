import React from 'react';
import Image from "next/image";

import Plot from "./Plot";
import {PictureList} from "../../_data/PictureList";

function Studio({handleSelectPicture}: {
    handleSelectPicture: ({index}: { index: number }) => void
}) {
    const pictures = PictureList.find(item => item.type === 'studio')?.items || [];

    return (
        <article className="w-full h-full max-w-390 relative">
            <Plot>
                <Image src={pictures[0].src} alt={pictures[0].label} width={250}
                       onClick={() => handleSelectPicture({index: pictures[0].id})}
                       className={' rotate-[10deg]'}/>
                <Image src={pictures[1].src} alt={pictures[1].label} width={180}
                       onClick={() => handleSelectPicture({index: pictures[1].id})}
                       className={'absolute right-0 rotate-[5deg] top-170'}/>
            </Plot>
            <Plot className={'pt-40 '}>
                <Image
                    src={pictures[2].src}
                    alt={pictures[2].label}
                    width={200}
                    onClick={() => handleSelectPicture({index: pictures[2].id})}
                    className={' ml-16 absolute z-10 '}
                />
                <Image
                    src={pictures[3].src}
                    alt={pictures[3].label}
                    width={230}
                    onClick={() => handleSelectPicture({index: pictures[3].id})}
                    className={'absolute right-0 top-240'}
                />
                <div className="invisible h-500"></div>
            </Plot>
            <Plot className={'h-400'}>
                <Image src={pictures[4].src} alt={pictures[4].label} width={200}
                       onClick={() => handleSelectPicture({index: pictures[4].id})}
                       className={' absolute -top-50 -rotate-[8deg]'}/>
                <Image src={pictures[5].src} alt={pictures[5].label} width={190}
                       onClick={() => handleSelectPicture({index: pictures[5].id})}
                       className={' absolute right-10 top-80 rotate-[8deg] z-10'}/>
            </Plot>
            <Plot className={'h-700'}>
                <Image src={pictures[6].src} alt={pictures[6].label} width={230}
                       onClick={() => handleSelectPicture({index: pictures[6].id})}
                       className={' absolute -top-100 -left-20'}/>
                <Image src={pictures[7].src} alt={pictures[7].label} width={220}
                       onClick={() => handleSelectPicture({index: pictures[7].id})}
                       className={' absolute -right-20 top-20 rotate-[9deg]'}/>
                <Image src={pictures[8].src} alt={pictures[8].label} width={260}
                       onClick={() => handleSelectPicture({index: pictures[8].id})}
                       className={' absolute left-0 top-300'}/>
            </Plot>
        </article>
    );
}

export default Studio;