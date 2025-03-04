import React from 'react';
import Invitation from "./Invitation";
import Schedule from "./Schedule";
import Location from "./Location";
import Script from "next/script";
import Account from "./Account";
import Thanks from "./Thanks";
import Notice from "./Notice";
import {useTheme} from "../../_context/ThemeContext";
import Section from "../Section";

function InfoMain({}) {
    const {theme, setTheme} = useTheme();

    return (
        <section className={'w-full h-full relative '}>
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
            <div className="relative h-[2000px] bg-background-gray-light">
                <Section id="Invitation">
                    <Invitation />
                </Section>
            </div>
            <div className="relative">
                <Section id="Schedule">
                    <Schedule />
                </Section>
                <Section id="Location">
                    <Location />
                </Section>
                <Section id="Account">
                    <Account />
                </Section>
                <Section id="Notice">
                    <Notice />
                </Section>
                <Section id="Thanks">
                    <Thanks />
                </Section>
            </div>
        </section>
    );
}

export default InfoMain;

