"use client";

import React, {useEffect} from 'react';
import Header from "./Header";
import Bottom from "./Bottom";
import {useTheme} from "../_context/ThemeContext";
import {useActivePage} from "../_context/ActivePageContext";

function LayoutClient({children}: { children: React.ReactNode }) {
    const {theme, setTheme} = useTheme();
    const {activePage, setActivePage} = useActivePage();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const visited = localStorage.getItem('jw_visited');
            if (visited) {
                setActivePage('info');
            } else {
                localStorage.setItem('jw_visited', 'true');
            }
        }
    }, []);

    const openingStyle = "h-full";
    const infoStyle = "h-full min-h-[calc(100dvh-54px)] mt-54";
    const galleryStyle = "h-full";

    return (
        <div className={'w-full '}>
            {
                activePage === 'info' && <Header theme={theme} activePage={activePage}/>
            }
            <main className={`w-full ${activePage === 'opening' ? openingStyle : activePage === 'info' ? infoStyle : galleryStyle}` }>
                <div id="portal-root"></div>
                {children}
            </main>
            {
                activePage !== 'opening' && <Bottom theme={theme} activePage={activePage} setActivePage={setActivePage}/>
            }
        </div>
    );
}

export default LayoutClient;