import React from 'react';
import Invitation from "./Invitation";
import Schedule from "./Schedule";
import Location from "./Location";
import Script from "next/script";
import Account from "./Account";
import Thanks from "./Thanks";

function InfoMain({}) {

    return (
        <section className={'w-full h-full'}>
            <Script
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ltrbth8yh6`}
                strategy="beforeInteractive"
            />
            {/*<Script*/}
            {/*    src="https://developers.kakao.com/sdk/js/kakao.js"*/}
            {/*    strategy="afterInteractive"*/}
            {/*/>*/}
            <Script
                src="https://developers.kakao.com/sdk/js/kakao.js"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log("✅ Kakao SDK 로드 완료");
                    if (window.Kakao && !window.Kakao.isInitialized()) {
                        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
                        console.log("✅ Kakao SDK 초기화 완료");
                    }
                }}
            />
            <Thanks/>
        </section>
    );
}

export default InfoMain;