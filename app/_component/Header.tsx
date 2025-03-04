"use client";

import React from 'react';
import {menuItems} from "../_data/menuItems";

function Header({theme}: { theme: 'light' | 'dark' }) {
    return (
        <header className="w-full  h-54  flex justify-center bg-background-gray-light fixed top-0 z-[21]">
            <nav className={`w-full max-w-470  h-full ${theme === 'light' ? 'bg-white' : 'bg-[#161618]'}`}>
                <ul className="flex w-full h-full overflow-x-auto whitespace-nowrap px-12 no-scrollbar">
                    {menuItems.map(({label, onClick}) => (
                        <HeaderItem
                            theme={theme}
                            key={label}
                            label={label}
                            onClick={onClick}
                            isActive={label === '모시는글'}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;


function HeaderItem({label, onClick, isActive, theme}: {
    label: string;
    onClick: () => void;
    isActive: boolean;
    theme: 'light' | 'dark';
}) {
    return (
        <li className={`text-15 py-2 border-b-1 h-full flex items-center px-8 
        ${theme === 'light' ? isActive ? ' border-[#C4282D] text-[#C4282D]' : 'text-[#61616F] border-transparent' : isActive ? ' border-[#98CCE6] text-[#98CCE6]' : 'text-[#61616F] border-transparent'}`}
            onClick={onClick}>
            {label}
        </li>
    );
}