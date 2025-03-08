import React from 'react';
import jieun from '@image/gallery/jieun-2.png';
import donghun from '@image/gallery/donghun.png';
import Image from "next/image";
import paper from '@image/gallery/paper.png';
import tape from '@image/gallery/red_tape.png'


function Intro({}) {
    return (
        <article className={'w-full h-full relative  flex justify-center'}>
            <div>
                <Image src={tape} alt={'tape'} width={60} className={'absolute right-10'}/>
                <Image src={paper} alt={'paper'} className={'pt-20 w-250'}/>
                <Image src={jieun} alt={'jieun'} className={'absolute w-220 -top-40 -left-55'}/>
                <Image src={donghun} alt={'donghun'} className={'absolute w-220 top-100 -right-40'}/>
                <Image src={tape} alt={'tape'} width={60} className={'absolute top-320 left-10'}/>
            </div>
            <div className="w-full z-20 font-hakgyoansim absolute left-80 top-70">
  <span
      className="font-[900] text-26"
      style={{
          color: 'white',
          WebkitTextStroke: '1px black'
      }}
  >
    신부 윤지은
  </span>
                <div
                    className="mt-4"
                    style={{
                        color: 'white',
                        WebkitTextStroke: '1px black'
                    }}
                >
                    1992.05.07
                </div>
            </div>
            <div className="w-full z-20 font-hakgyoansim absolute left-80 top-280">
  <span
      className="font-bold text-26"
      style={{
          color: 'white',
          WebkitTextStroke: '1px black'
      }}
  >
    신랑 신동헌
  </span>
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

        </article>
    );
}

export default Intro;