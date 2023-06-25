import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <Search />
            {children}
            <Footer />
        </>
    );
}
