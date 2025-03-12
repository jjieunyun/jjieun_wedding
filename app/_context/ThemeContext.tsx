'use client';

import {createContext, useContext, useState, ReactNode} from 'react';

// 테마 타입 정의
export type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    activeSection: string | null;
    setActiveSection: (section: string | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [activeSection, setActiveSection] = useState<string | null>('Invitation');

    return (
        <ThemeContext.Provider value={{theme, setTheme, activeSection, setActiveSection}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
