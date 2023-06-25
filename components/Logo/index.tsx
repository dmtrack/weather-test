import Link from 'next/link';
import cn from 'classnames';

import manrope from '../../utils/fonts/manrope';
import Typography from '../Typography';

import styles from '../Logo/Logo.module.scss';

function Logo() {
    return (
        <Link href='/' className={styles.container}>
            <Typography
                className={cn(styles.logoText, manrope.className)}
                color='dark-blue'
                fontWeight='bold'>
                wOracle
            </Typography>
        </Link>
    );
}

export default Logo;
