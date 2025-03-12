'use client';
import { useState } from 'react';

function usePortal() {
    const [isPortalOpen, setIsPortalOpen] = useState(false);

    const handleOpenPortal = () => {
        setIsPortalOpen(true);
    };

    const handleClosePortal = () => {
        setIsPortalOpen(false);
    };

    return {
        isPortalOpen,
        handleOpenPortal,
        handleClosePortal,
    };
}

export default usePortal;
