
import React from 'react';
import jieun from '@image/gallery/jieun-2.png';
import donghun from '@image/gallery/donghun.png';
import Image from "next/image";
import paper from '@image/gallery/paper.png';
import tape from '@image/gallery/red_tape.png'
import sticker from '@image/gallery/hearts.png'
import titleBanner from "@image/title.png";


function Intro({}) {
    return (
       <div className={`bg-[url('/image/gallery_bg.png')] bg-repeat px-48 relative flex flex-col items-center`}>
           <Image src={titleBanner} alt={'titleBanner'} className={'pt-40'} priority={true}/>
           <article className={`w-full relative  flex justify-center pb-140 max-w-320 `}>
               <div>
                   <Image src={tape} alt={'tape'} width={60} className={'absolute right-10'} priority={true}/>
                   <Image src={paper} alt={'paper'} className={'pt-20 w-250'} priority={true}/>
                   <Image src={jieun} alt={'jieun'} className={'absolute w-220 -top-40 -left-55'} priority={true}/>
                   <Image src={sticker} alt={'sticker'} width={60} className={'absolute -top-20 left-40'} priority={true}/>
                   <Image src={donghun} alt={'donghun'} className={'absolute w-220 top-100 -right-40'} priority={true}/>
                   <Image src={tape} alt={'tape'} width={60} className={'absolute top-320 left-10'} priority={true}/>
               </div>
               <div className={'overflow-x-hidden'}>
                   <div className="w-full z-20 font-hakgyoansim absolute left-100 top-70 ">
                <span
                    className="font-[900] text-26"
                    style={{
                        color: 'white',
                        WebkitTextStroke: '1px black'
                    }}>신부 윤지은</span>
                       <div
                           className="mt-4"
                           style={{
                               color: 'white',
                               WebkitTextStroke: '1px black'
                           }}>
                           1992.05.07
                       </div>
                   </div>
                   <div className="w-full z-20 font-hakgyoansim absolute left-80 top-280">
                <span
                    className="font-bold text-26"
                    style={{
                        color: 'white',
                        WebkitTextStroke: '1px black'
                    }}>신랑 신동헌</span>
                       <div
                           className="mt-4 ml-48"
                           style={{
                               color: 'white',
                               WebkitTextStroke: '1px black'
                           }}
                       >
                           1991.02.20
                       </div>
                   </div>
               </div>
           </article>
       </div>
    );
}

export default Intro;