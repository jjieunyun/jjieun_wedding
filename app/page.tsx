"use client";

import React, { useEffect, useState } from "react";
import InfoMain from "./_component/Info/InfoMain";
import MainLetter from "./_component/MainLetter";
import { useActivePage } from "./_context/ActivePageContext";
import Script from "next/script";
import GalleryMain from "./_component/gallery/GalleryMain";

export default function Home() {
    const { activePage } = useActivePage();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);



    return (
        <main
            className={`w-full ${
                activePage === "opening" ? "h-full" : "h-full min-h-[calc(100dvh-54px)]"
            } flex justify-center relative`}
        >
            <Script
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_KEY}`}
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
            <div className="h-full w-full max-w-470 relative bg-[#161618]">
                {activePage === "opening" && isMounted && <MainLetter />}
                {activePage === "info" && <InfoMain />}
                {activePage === "gallery" && <GalleryMain/>}
            </div>
        </main>
    );
}