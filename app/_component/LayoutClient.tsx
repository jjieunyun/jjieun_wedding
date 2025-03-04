"use client";

import React from 'react';
import Header from "./Header";
import Bottom from "./Bottom";
import {useTheme} from "../_context/ThemeContext";

function LayoutClient({children}: { children: React.ReactNode }) {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <Header theme={theme}/>
            <main className={'w-full h-[calc(100dvh-50px)]  mt-54 '}>
                <div id="portal-root"></div>
                {children}
            </main>
            <Bottom theme={theme}/>
        </div>
    );
}

export default LayoutClient;