import React from 'react';
import bird from "@image/bird.png";
import Image from "next/image";

function Notice({}) {
    return (
       <section className={'w-full h-full py-40 bg-[#FAFAFA]'}>
           <p className="text-32 text-center font-semibold leading-[120%] mb-16 ]">
               안내 사항
           </p>
           <div className={'flex justify-center mb-40'}>
               <Image src={bird} alt={'bird'} width={160} height={160} />
           </div>

           <div className={'w-full flex justify-center'}>
               <ul className="list-disc list-inside space-y-6 pl-4">
                   <li className={'mb-16'}>
                       <span className="-ml-4">지하철을 이용하시는 하객분들은</span><br />
                       <span className={'ml-14'}>종합운동장역 9번출구에서</span><br />
                       <span className={'ml-14'}>셔틀버스를 이용하시면 편리합니다.</span><br />
                       <span className={'ml-14'}>(5분간격 운행)</span><br />
                   </li>
                   <li>
                       <span className="-ml-4">식장 내, 화환 반입이 불가능합니다.</span><br />
                       <span className={'ml-14'}>너른 마음으로 양해 부탁드립니다.</span>
                   </li>

               </ul>
           </div>

       </section>
    );
}

export default Notice;