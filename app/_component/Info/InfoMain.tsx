import React from 'react';
import Invitation from "./Invitation";
import Schedule from "./Schedule";
import Location from "./Location";
import Script from "next/script";
import Account from "./Account";
import Thanks from "./Thanks";
import Notice from "./Notice";

function InfoMain({}) {

    return (
        <section className={'w-full h-full relative'}>
            <Script
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ltrbth8yh6`}
                strategy="beforeInteractive"
            />
            <Script
                src="https://developers.kakao.com/sdk/js/kakao.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.Kakao && !window.Kakao.isInitialized()) {
                        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
                    }
                }}
            />
            <div className={' relative'}>
                <Invitation/>
            </div>
            <div className={'relative'}>
                <Schedule/>
                <Location/>
                <Account/>
                <Notice/>
                <Thanks/>
            </div>
        </section>
    );
}

export default InfoMain;

