"use client";

import React from 'react';
import {ActivePage} from "../_context/ActivePageContext";

function Bottom({theme = 'dark', activePage, setActivePage}: {
    theme?: 'dark' | 'light';
    activePage: ActivePage | null;
    setActivePage: (activePage: ActivePage) => void;
}) {

    const text = (activePage === 'gallery' ? '예식정보 바로가기' : '갤러리 바로가기');

    console.log(activePage)

    const handleClick = () => {
        setActivePage((prev) => prev === 'gallery' ? 'info' : 'gallery');
    }

    return (
        <div onClick={handleClick}
            className="w-full  h-50  flex justify-center bg-background-gray-light fixed bottom-0 z-[21] cursor-pointer">
            <div
                className={`w-full max-w-470  h-full flex justify-center items-center ${activePage === null && 'bg-[#161618]'} ${theme === 'light' ? 'bg-[#E1E1E1] text-[#17171B]' : 'bg-[#343434] text-[#F4F1DE]'}`}>
                {text}
            </div>
        </div>
    );
}

export default Bottom;