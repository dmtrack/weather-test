import '../styles/reset.scss';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import RootLayout from './layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {' '}
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </>
    );
}
