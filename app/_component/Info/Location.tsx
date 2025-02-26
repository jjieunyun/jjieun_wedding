import React from 'react';
import useClipboard from "../../_hook/useClipboard";

function Location({}) {
    const {copyToClipboard} = useClipboard();

    return (
        <section>
            <div className={'mb-16 px-24 cursor-pointer'}>
                <p className={'text-32 text-center font-semibold leading-[120%] mb-16'}>
                    아시아드시티<br/>
                    마리아주 홀
                </p>
                <div onClick={() => copyToClipboard('부산 연제구 거제동 1299')}
                    className={'h-42 flex items-center rounded-8 border-1 px-24 justify-between'}>
                    <p>부산 연제구 거제동 1299</p>
                   <p className={'text-[#C4282D] text-14 font-semibold'}>복사</p>
                </div>
            </div>
        </section>
    );
}

export default Location;