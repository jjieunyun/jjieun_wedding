import React from 'react';

const Plot = ({className, children}: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={`flex relative ${className}`}>
            {children}
        </div>
    )
}

export default Plot;