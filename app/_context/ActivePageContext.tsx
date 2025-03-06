'use client';

import {createContext, useContext, useState, ReactNode} from 'react';

// 테마 타입 정의
export type ActivePage = 'opening' | 'gallery' | 'info';

interface ActivePageContextType {
    activePage: ActivePage;
    setActivePage: (activePage: ActivePage) => void;
}

const ActivePageContext = createContext<ActivePageContextType | undefined>(undefined);

interface ActivePageProviderProps {
    children: ReactNode;
}

export const ActivePageProvider = ({children}: ActivePageProviderProps) => {
    const [activePage, setActivePage] = useState<ActivePage>('opening');

    return (
        <ActivePageContext.Provider value={{activePage, setActivePage}}>
            {children}
        </ActivePageContext.Provider>
    );
};

export const useActivePage = () => {
    const context = useContext(ActivePageContext);
    if (!context) {
        throw new Error('useActivePage must be used within a ActivePageProvider');
    }
    return context;
};
