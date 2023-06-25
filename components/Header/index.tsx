'use client';

import { navigationList } from '../../utils/constants';

import Logo from '../Logo';
import Navigation from './Navigation';

import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <Navigation navigationList={navigationList} />
            </div>
        </header>
    );
}

export default Header;
