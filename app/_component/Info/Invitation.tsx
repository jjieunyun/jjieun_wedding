import React from 'react';
import Image from "next/image";
import InfoMain from '@image/info_main.png';
import IcRibbon from '@image/ic-ribbon.svg';

function Invitation({}) {
    return (
        <article className={'w-full '}>
            <Picture/>
           <Message/>
        </article>
    );
}

export default Invitation;

const Message = () => {
    return (
        <div className={'w-full h-[calc(100dvh-54px)]  flex flex-col items-center bg-[#F5F1DC]'}>
            <div className={'my-35 flex flex-col items-center'}>
                <Image src={IcRibbon} alt={'IcRibbon'} className={''}/>
                <p className={'text-center'}> 소중한 분들을 초대합니다.</p>
            </div>

            <div className={'text-center text-20 font-light mb-58'}>
               <div className={'leading-[160%] mb-24'}>
                   5년이라는 시간 속에서 <br/>
                   서로에게 가장 소중한 사람이 되었습니다.<br/>
                   이제 하나의 길 위에서<br/>
                   평생을 약속하려 합니다.
               </div>
                <div className={'leading-[160%] mb-24'}>
                    2025년 4월 12일, 귀한 걸음으로<br/>
                    축복해 주시면 감사하겠습니다.
                </div>
            </div>
            <div>
                지은 동헌 올림
            </div>
        </div>
    )
}

const Picture = () => {
    return <div className={'w-full h-[calc(100dvh-54px)] bg-[#161618] flex items-center'}><Image src={InfoMain} alt={'InfoMain'}/></div>
}