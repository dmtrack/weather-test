'use client';

import { useCallback, useEffect } from 'react';
import useToggle from './useToggle';

const TABLET_SIZE = 768;

const useNavigation = () => {
    const {
        value: isMenuOpen,
        setValue: setMenuOpen,
        toggle: toggleMenu,
    } = useToggle(false);

    const closeMenuOnDesktop = () => {
        if (document.body.clientWidth > TABLET_SIZE) {
            setMenuOpen(() => false);
        }
    };

    const closeMenu = useCallback(() => {
        if (isMenuOpen) {
            setMenuOpen(false);
        }
    }, [isMenuOpen]);

    useEffect(() => {
        window.addEventListener('resize', closeMenuOnDesktop);

        return () => window.removeEventListener('resize', closeMenuOnDesktop);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    }, [isMenuOpen]);

    return {
        isMenuOpen,
        setMenuOpen,
        toggleMenu,
        closeMenu,
        closeMenuOnDesktop,
    };
};

export default useNavigation;
