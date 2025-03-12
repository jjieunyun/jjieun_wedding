'use client';

import React, { FC, useEffect, useRef, useState } from 'react';

interface CustomCollapseProps {
    isOpened: boolean;
    duration?: number;
    className?: string;
    children: React.ReactNode;
}

const CustomCollapse: FC<CustomCollapseProps> = ({
                                                     isOpened,
                                                     duration = 300,
                                                     className,
                                                     children,
                                                 }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [children, isOpened]);

    const containerStyle: React.CSSProperties = {
        overflow: 'hidden',
        transition: `height ${duration}ms ease`,
        height: isOpened ? `${height}px` : '0px',
    };

    return (
        <div style={containerStyle} className={`${className} `}>
            <div ref={contentRef}>{children}</div>
        </div>
    );
};

export default CustomCollapse;
