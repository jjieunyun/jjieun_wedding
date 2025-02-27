"use client";

import React, { useEffect, useRef } from "react";

function Map({className = ''}: {className?: string}) {
    const mapElement = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (!mapElement.current || !window.naver) return;

        const mapOptions = {
            center: new window.naver.maps.LatLng(35.190103, 129.058361), // 서울 시청 좌표
            zoom: 14,
        };

        const map = new window.naver.maps.Map(mapElement.current, mapOptions);

        // 마커 추가
        new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(35.190103, 129.058361),
            map,
            title: "서울 시청",
        });
    }, []);

    return (
        <article className={`w-full h-full ${className}`}>
            <div ref={mapElement} className="w-full h-280" id="map" />
        </article>
    );
}

export default Map;