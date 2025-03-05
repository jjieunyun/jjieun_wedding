import React, {useEffect, useRef, useState, useCallback} from "react";
import Invitation from "./Invitation";
import Schedule from "./Schedule";
import Location from "./Location";
import Script from "next/script";
import Account from "./Account";
import Thanks from "./Thanks";
import Notice from "./Notice";
import {useTheme} from "../../_context/ThemeContext";

function InfoMain() {
    const { setTheme, setActiveSection: setActiveContext} = useTheme();
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const setRef = useCallback((componentName: string) => (el: HTMLDivElement | null) => {
        if (el) {
            sectionRefs.current[componentName] = el;
        }
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            let newActiveSection: string | null = null;

            Object.entries(sectionRefs.current).forEach(([componentName, section]) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 54 && rect.bottom > 54) {
                        newActiveSection = componentName;
                    }
                }
            });

            if (newActiveSection !== activeSection) {
                setActiveSection(newActiveSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // 초기 실행

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);

    useEffect(() => {
        const handleScroll = () => {
            const scheduleSection = sectionRefs.current["Schedule"];
            const isScheduleHidden =
                scheduleSection && scheduleSection.getBoundingClientRect().top >= window.innerHeight;
            setActiveContext(activeSection);


            if (activeSection === "Invitation" && isScheduleHidden) {
                setTheme("dark");
            } else if (activeSection === "Thanks") {
                setTheme("dark");
            } else {
                setTheme("light");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // 초기 실행

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);


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
            <div ref={setRef("Invitation")} data-component="Invitation"
                 className="relative h-[2000px] bg-background-gray-light">
                <Invitation/>
            </div>
            <div className="relative">
                {/* Schedule 컴포넌트 */}
                <div ref={setRef("Schedule")} data-component="Schedule">
                    <Schedule/>
                </div>
                {/* Location 컴포넌트 */}
                <div ref={setRef("Location")} data-component="Location">
                    <Location/>
                </div>
                {/* Account 컴포넌트 */}
                <div ref={setRef("Account")} data-component="Account">
                    <Account/>
                </div>
                {/* Notice 컴포넌트 */}
                <div ref={setRef("Notice")} data-component="Notice">
                    <Notice/>
                </div>
                {/* Thanks 컴포넌트 */}
                <div ref={setRef("Thanks")} data-component="Thanks">
                    <Thanks/>
                </div>
            </div>
            <div className="fixed top-0 left-0 p-4 bg-white shadow-md">
                현재 보이는 섹션: {activeSection || "없음"}
            </div>
        </section>
    );
}

export default InfoMain;