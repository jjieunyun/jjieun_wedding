"use client";

import React from 'react';
import {menuItems} from "../_data/menuItems";

function Header({}) {
    return (
        <header className="w-full h-54 bg-white">
            <nav className="w-full h-full">
                <ul className="flex w-full h-full overflow-x-auto whitespace-nowrap px-12 no-scrollbar">
                    {menuItems.map(({ label, onClick }) => (
                        <HeaderItem
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


function HeaderItem({ label, onClick, isActive }: {
    label: string;
    onClick: () => void;
    isActive: boolean;
}) {
    return (
        <li className={`text-15 py-2 border-b-1 h-full flex items-center px-8 ${isActive ? ' border-[#C4282D] text-[#C4282D]' : 'text-[#61616F] border-transparent'}`}
            onClick={onClick}>
            {label}
        </li>
    );
}