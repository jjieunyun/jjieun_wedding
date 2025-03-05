import React, { useEffect, useRef } from 'react';
import Invitation from "./Invitation";
import Schedule from "./Schedule";
import Location from "./Location";
import Script from "next/script";
import Account from "./Account";
import Thanks from "./Thanks";
import Notice from "./Notice";
import { useTheme } from "../../_context/ThemeContext";

function InfoMain({}) {
    const { theme, setTheme } = useTheme();

    // 각 컴포넌트를 감싸는 div에 연결할 ref 생성
    const invitationRef = useRef(null);
    const scheduleRef = useRef(null);
    const locationRef = useRef(null);
    const accountRef = useRef(null);
    const noticeRef = useRef(null);
    const thanksRef = useRef(null);

    useEffect(() => {
        // 뷰포트 상단 기준 54px에 해당하는 rootMargin 설정
        const options = {
            root: null,
            rootMargin: '-54px 0px 0px 0px', // top에서 54px 오프셋 적용
            threshold: 1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // 요소가 intersecting 될 때 (즉, rootMargin 영역에 들어올 때)
                if (entry.isIntersecting) {
                    // data-component attribute로 컴포넌트 이름 출력
                    console.log(entry.target.getAttribute('data-component'));
                }
            });
        }, options);

        // 각 ref가 존재하면 관찰 시작
        if (invitationRef.current) observer.observe(invitationRef.current);
        if (scheduleRef.current) observer.observe(scheduleRef.current);
        if (locationRef.current) observer.observe(locationRef.current);
        if (accountRef.current) observer.observe(accountRef.current);
        if (noticeRef.current) observer.observe(noticeRef.current);
        if (thanksRef.current) observer.observe(thanksRef.current);

        // 컴포넌트 언마운트 시 observer 해제
        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full h-full relative">
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
            {/* Invitation 컴포넌트 */}
            <div
                data-component="Invitation"
                ref={invitationRef}
                className="relative h-[2000px] bg-background-gray-light"
            >
                <Invitation />
            </div>
            <div className="relative">
                {/* Schedule 컴포넌트 */}
                <div data-component="Schedule" ref={scheduleRef}>
                    <Schedule />
                </div>
                {/* Location 컴포넌트 */}
                <div data-component="Location" ref={locationRef}>
                    <Location />
                </div>
                {/* Account 컴포넌트 */}
                <div data-component="Account" ref={accountRef}>
                    <Account />
                </div>
                {/* Notice 컴포넌트 */}
                <div data-component="Notice" ref={noticeRef}>
                    <Notice />
                </div>
                {/* Thanks 컴포넌트 */}
                <div data-component="Thanks" ref={thanksRef}>
                    <Thanks />
                </div>
            </div>
        </section>
    );
}

export default InfoMain;