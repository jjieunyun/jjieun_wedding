"use client";

import React from 'react';
import Header from "./Header";
import Bottom from "./Bottom";
import {useTheme} from "../_context/ThemeContext";
import {useActivePage} from "../_context/ActivePageContext";

function LayoutClient({children}: { children: React.ReactNode }) {
    const {theme, setTheme} = useTheme();
    const {activePage} = useActivePage()

    return (
        <div className={'w-full '}>
            {
                activePage === 'info' && <Header theme={theme}/>
            }
            <main className={`w-full ${activePage === 'opening' ? 'h-full' : 'h-[calc(100dvh-50px)] mt-54'}`}>
                <div id="portal-root"></div>
                {children}
            </main>
            {
                activePage !== 'opening' && <Bottom theme={theme}/>
            }
        </div>
    );
}

export default LayoutClient;