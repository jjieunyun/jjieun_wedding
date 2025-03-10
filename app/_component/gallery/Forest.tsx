import React from 'react';
import Plot from "./Plot";
import { PictureList } from "../../_data/PictureList";
import Image from "next/image";

function Forest({handleSelectPicture}:{
    handleSelectPicture: ({index}: { index: number }) => void
}) {
    const forestPictures = PictureList.find(item => item.type === 'forest')?.items || [];

    return (
        <article className="w-full h-full max-w-390 relative">
            <Plot className="h-[400px]">
                {forestPictures[0] && (
                    <Image
                        src={forestPictures[0].src}
                        alt={forestPictures[0].label}
                        width={250}
                        onClick={() => handleSelectPicture({index: forestPictures[0].id})}
                        className="absolute rotate-[10deg]"
                    />
                )}
                {forestPictures[1] && (
                    <Image
                        src={forestPictures[1].src}
                        alt={forestPictures[1].label}
                        width={200}
                        onClick={() => handleSelectPicture({index: forestPictures[1].id})}
                        className="absolute -right-30 -rotate-[5deg] top-170"
                    />
                )}
            </Plot>
            <Plot className="h-500">
                {forestPictures[2] && (
                    <Image
                        src={forestPictures[2].src}
                        alt={forestPictures[2].label}
                        width={220}
                        onClick={() => handleSelectPicture({index: forestPictures[2].id})}
                        className="absolute top-20 rotate-[5deg]"
                    />
                )}
                {forestPictures[3] && (
                    <Image
                        src={forestPictures[3].src}
                        alt={forestPictures[3].label}
                        width={200}
                        onClick={() => handleSelectPicture({index: forestPictures[3].id})}
                        className="absolute right-5 top-200 rotate-[3deg] z-10"
                    />
                )}
            </Plot>
        </article>
    );
}

export default Forest;