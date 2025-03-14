import React from 'react';
import Plot from "./Plot";
import {PictureList} from "../../_data/PictureList";
import Image from "next/image";
import night from "@image/gallery/pictures/object/night.png";
import hug from "@image/gallery/pictures/object/hug.png";

function Night({handleSelectPicture}: {
    handleSelectPicture: ({index}: { index: number }) => void
}) {
    const nightPictures = PictureList.find(item => item.type === 'night')?.items || [];

    return (
        <article className="w-full h-full max-w-390 relative">
            <Plot className={'h-460 mt-30'}>
                {
                    nightPictures[0] && (
                        <Image src={nightPictures[0].src} alt={nightPictures[0].label} width={220} quality={50}
                                    onClick={() => handleSelectPicture({index: nightPictures[0].id})}
                               className={'absolute -left- z-[5] -rotate-[11deg]'}
                        />
                    )
                }
                {
                    nightPictures[1] && (
                        <Image src={nightPictures[1].src} alt={nightPictures[1].label} width={220} quality={50}
                                    onClick={() => handleSelectPicture({index: nightPictures[1].id})}
                                 className={'absolute -right-20 rotate-[9deg] top-190 z-10'}
                        />
                    )
                }
                <Image src={night} alt={'night'} width={193} className={'absolute -right-40 -top-20 '}/>
                <Image src={hug} alt={'hug'} width={120} className={'absolute left-40 top-400 z-10'}/>
            </Plot>

        </article>
    );
}

export default Night;