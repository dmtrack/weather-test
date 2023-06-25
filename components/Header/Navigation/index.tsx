import Link from 'next/link';
import cn from 'classnames';

import openSans from '../../../utils/fonts/openSans';

import useNavigation from '../../../hooks/useNavigation';

import Button from '../../Button';

import { INavigationLinkItem } from '../../../ts/interfaces';

import styles from './Navigation.module.scss';

interface NavigationProps {
    navigationList: INavigationLinkItem[];
}

function Navigation({ navigationList }: NavigationProps) {
    const { isMenuOpen, closeMenu, toggleMenu } = useNavigation();
    const burgerClassName = cn(styles.burger, {
        [styles['burger--active']]: isMenuOpen,
    });

    const menuClassName = cn(styles.menu, {
        [styles['menu--active']]: isMenuOpen,
    });

    const overlayClassName = cn(styles.overlay, {
        [styles['overlay--active']]: isMenuOpen,
    });

    return (
        <nav className={styles.navigation}>
            <button
                type='button'
                className={burgerClassName}
                onClick={toggleMenu}>
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
            </button>
            <div
                role='presentation'
                className={overlayClassName}
                onClick={closeMenu}
            />
            <ul className={menuClassName}>
                {navigationList.map(({ id, href, text }) => (
                    <li key={id} className={styles.item}>
                        <Link
                            href={href}
                            className={cn(styles.link, openSans.className)}>
                            {text}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href='/'>
                        <Button>Log in</Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
