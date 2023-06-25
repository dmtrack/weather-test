import Head from 'next/head';

import Intro from '../components/Intro';

export default function Home() {
    return (
        <>
            <Head>
                <title>wOracle</title>
            </Head>
            <main>
                <Intro />
            </main>
        </>
    );
}
