import React from 'react';
import Invitation from "./Invitation";
import Schedule from "./Schedule";
import Location from "./Location";
import Script from "next/script";

function InfoMain({}) {
    return (
        <section>
            <Script
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ltrbth8yh6`}
                strategy="beforeInteractive"
            />
            <Location/>
        </section>
    );
}

export default InfoMain;