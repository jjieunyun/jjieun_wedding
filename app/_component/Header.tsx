"use client";

import React from 'react';
import {menuItems} from "../_data/menuItems";
import {useTheme} from "../_context/ThemeContext";
import {ActivePage} from "../_context/ActivePageContext";

function Header({ theme, activePage }: { theme: 'light' | 'dark'; activePage: null | ActivePage }) {
    const { activeSection } = useTheme();

    return (
        <header id="header" className="w-full h-54 flex justify-center bg-background-gray-light fixed top-0 z-[21]">
            <nav className={`w-full max-w-470 h-full ${activePage === null && 'bg-[#161618]'} ${theme === 'light' ? 'bg-white' : 'bg-[#161618]'}`}>
                <ul className="flex w-full h-full overflow-x-auto whitespace-nowrap px-12 no-scrollbar">
                    {menuItems.map(({ label, id }) => {
                        const isActive =
                            activeSection !== null
                                ? Array.isArray(id)
                                    ? id.includes(activeSection)
                                    : activeSection === id
                                : false;

                        // onClick 핸들러에 스크롤 이동 로직 추가
                        const handleItemClick = () => {
                            // id가 배열일 경우 첫 번째 값을 타겟으로 사용
                            const targetId = Array.isArray(id) ? id[0] : id;
                            const targetElement = document.querySelector(`[data-component="${targetId}"]`);
                            if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        };

                        return (
                            <HeaderItem
                                theme={theme}
                                key={label}
                                label={label}
                                onClick={handleItemClick}
                                isActive={isActive}
                            />
                        );
                    })}
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