import React from 'react';
import Plot from "./Plot";
import { PictureList } from "../../_data/PictureList";
import Image from "next/image";
import greenTape from '@image/gallery/pictures/object/green_tape.png';
import green from '@image/gallery/pictures/object/green.png';
import love from '@image/gallery/pictures/object/love_letter.png';
import smile from '@image/gallery/pictures/object/smile.png';
import leaf from '@image/gallery/pictures/object/leaf.png';
import red from '@image/gallery/pictures/object/red_heart.png';

function Forest({handleSelectPicture}:{
    handleSelectPicture: ({index}: { index: number }) => void
}) {
    const forestPictures = PictureList.find(item => item.type === 'forest')?.items || [];

    return (
        <article className="w-full h-full max-w-390 relative">
            <Plot className="h-[400px]">
                <Image src={greenTape} alt={'greenTape'} className={'absolute z-20 right-80 -top-10'} width={90} quality={90} priority={true}/>
                <Image src={leaf} alt={'greenTape'} className={'absolute z-20 -right-40 '} width={140}  priority={true}/>
                {forestPictures[0] && (
                    <Image
                        src={forestPictures[0].src}
                        alt={forestPictures[0].label}
                        width={250}
                        quality={50}
                        priority={true}
                        onClick={() => handleSelectPicture({index: forestPictures[0].id})}
                        className="absolute rotate-[10deg]"
                    />
                )}
                {forestPictures[1] && (
                    <Image
                        src={forestPictures[1].src}
                        alt={forestPictures[1].label}
                        width={200}
                        quality={50}
                        priority={true}
                        onClick={() => handleSelectPicture({index: forestPictures[1].id})}
                        className="absolute -right-30 -rotate-[5deg] top-170"
                    />
                )}
            </Plot>
            <Plot className="h-740">
                <Image src={love} alt={'love'} quality={90} className="absolute top-100 -right-40 z-20" width={160}/>
                {forestPictures[2] && (
                    <Image
                        src={forestPictures[2].src}
                        alt={forestPictures[2].label}
                        width={220}
                        priority={true}
                        onClick={() => handleSelectPicture({index: forestPictures[2].id})}
                        className="absolute top-40 rotate-[5deg]"
                    />
                )}
                {forestPictures[3] && (
                    <Image
                        src={forestPictures[3].src}
                        alt={forestPictures[3].label}
                        width={200}
                        quality={50}
                        priority={true}
                        onClick={() => handleSelectPicture({index: forestPictures[3].id})}
                        className="absolute right-5 top-340 -rotate-[6deg] z-10"
                    />
                )}
                <Image src={red} alt={'smile'} quality={90} className="absolute bottom-160 left-20 z-20 animate-tilt" width={105}/>
            </Plot>
        </article>
    );
}

export default Forest;