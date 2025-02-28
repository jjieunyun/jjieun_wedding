import React from 'react';
import Invitation from "./Invitation";
import Schedule from "./Schedule";
import Location from "./Location";
import Script from "next/script";
import Account from "./Account";

function InfoMain({}) {
    return (
        <section className={'w-full h-full'}>
            <Script
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ltrbth8yh6`}
                strategy="beforeInteractive"
            />
            <Account/>
        </section>
    );
}

export default InfoMain;