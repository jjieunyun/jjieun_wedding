import React from 'react';
import jieun from '@image/gallery/jieun-2.png';
import donghun from '@image/gallery/donghun.png';
import Image from "next/image";
import nameTagJ from'@image/gallery/nameTag_jieun.png';
import nameTagD from'@image/gallery/nameTag_donghun.png';
import sticker from '@image/gallery/hearts.png'


function Intro({}) {
    return (
        <div className={`bg-[url('/image/gallery_bg.png')] bg-repeat relative flex flex-col items-center pt-80`}>
            <article className={`w-full h-full relative  flex justify-center pb-60 max-w-320 `}>
                <div className={' h-300'}>
                    <Image src={jieun} alt={'jieun'} className={'absolute -left-74 h-380 object-contain '} priority={true}/>

                    <Image src={donghun} alt={'donghun'} className={'absolute -right-65 h-380 object-contain'} priority={true}/>
                </div>
                <div className={'flex flex-col items-center w-full'}>
                    <Image src={sticker} alt={'sticker'} width={60} className={'pt-100 top-50 animate-bounce'}
                           priority={true}/>
                    <div className={'flex items-center justify-center gap-x-65  pt-[220px]'}>
                        <Image src={nameTagJ} alt={'nameTag'} width={97} className={''} priority={true}/>
                        <Image src={nameTagD} alt={'nameTag'} width={97} className={''} priority={true}/>
                    </div>
                </div>

            </article>
        </div>
    );
}

export default Intro;