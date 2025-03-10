'use client';

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Portal({
                    isOpen,
                    children,
                    position = 'center',
                    customStyles = {},
                    useOverlay = true,
                    useTransition = true,
                    onClose
                }:{
    isOpen: boolean;
    children: React.ReactNode;
    position?: 'center' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    customStyles?: React.CSSProperties;
    useOverlay?: boolean;
    useTransition?: boolean;
    onClose?: () => void;
}) {
    const [visible, setVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!useTransition) {
            setVisible(isOpen);
            return;
        }

        if (isOpen) {
            setVisible(true);
        } else {
            const timeoutId = setTimeout(() => setVisible(false), 200);
            return () => clearTimeout(timeoutId);
        }
    }, [isOpen, useTransition]);

    useEffect(() => {
        setMounted(true);

        // 모달이 열렸을 때 스크롤 막기
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // 컴포넌트 언마운트 시 스크롤 복구
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    if (!mounted) {
        return null;
    }

    const positionStyles = {
        center: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        topLeft: {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
        topRight: {
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
        },
        bottomLeft: {
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
        },
        bottomRight: {
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        },
    };

    const containerStyles = {
        ...positionStyles[position],
        ...customStyles,
    };

    return ReactDOM.createPortal(
        <div style={{
                opacity: isOpen ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden',
                transition: useTransition
                    ? 'opacity 0.2s ease, visibility 0.2s ease-in'
                    : 'none',
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: 40,
                height: '100dvh',
                width: '100vw',
                backgroundColor: useOverlay ? 'rgba(0, 0, 0, 0.68)' : 'transparent',
                outline: 'none',
                display: 'flex',
                ...containerStyles,
            }}>
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                }}>
                {children}
            </div>
        </div>,
        document.getElementById('portal-root') as HTMLElement
    );
}

export default Portal;
