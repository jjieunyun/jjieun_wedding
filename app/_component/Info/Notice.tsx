import React from 'react';
import bird from "@image/bird.png";
import Image from "next/image";

function Notice({}) {
    return (
       <section className={'w-full h-full py-40 bg-[#FAFAFA]'}>
           <p className="text-32 text-center font-semibold leading-[120%] mb-16 ]">
               안내 사항
           </p>
           <div className={'flex justify-center'}>
               <Image src={bird} alt={'bird'} width={160} height={160} />
           </div>
       </section>
    );
}

export default Notice;