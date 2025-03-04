"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useTheme} from "../_context/ThemeContext";

interface SectionProps {
    id: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { setTheme } = useTheme();

    console.log(id)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (id === 'Invitation' || id === 'Thanks') {
                            setTheme('dark');
                        } else {
                            setTheme('light');
                        }
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            {
                root: null,
                rootMargin: '-54px 0px 0px 0px',
                threshold: 0,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [id, setTheme]);

    return (
        <div ref={ref}>
            {children}
            {isVisible && <div style={{ position: 'fixed', top: 0 }}>현재 {id} 컴포넌트</div>}
        </div>
    );
};

export default Section;