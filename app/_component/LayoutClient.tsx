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
    }, [activePage]);


    return (
        <div className={'w-full '}>
            {
                activePage === 'info' && <Header theme={theme} activePage={activePage}/>
            }
            <main className={`w-full ${activePage === 'opening' ? 'h-full' : 'h-[calc(100dvh-50px)] mt-54'}`}>
                <div id="portal-root"></div>
                {children}
            </main>
            {
                activePage !== 'opening' && <Bottom theme={theme} activePage={activePage}/>
            }
        </div>
    );
}

export default LayoutClient;