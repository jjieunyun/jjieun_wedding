"use client";

import React, { useEffect, useRef } from "react";

function Map({className = ''}: {className?: string}) {
    const mapElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mapElement.current || !window.naver) return;

        const mapOptions = {
            center: new window.naver.maps.LatLng(35.190103, 129.058361), // 지도 중심좌표
            zoom: 14,
        };

        const map = new window.naver.maps.Map(mapElement.current, mapOptions);

        // 마커 추가
        new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(35.190103, 129.058361),
            map,
            icon: {
                url: "/image/fa-solid_map-marker.svg", // import한 SVG 경로를 url로 전달
                size: new window.naver.maps.Size(27, 36),
                scaledSize: new window.naver.maps.Size(27, 36),
            },
            title: "아시아드 웨딩홀",
            animation:  window.naver.maps.Animation.BOUNCE
        });
    }, []);

    return (
        <article className={`w-full h-full ${className}`}>
            <div ref={mapElement} className="w-full h-[280px]" id="map"/>
        </article>
    );
}

export default Map;