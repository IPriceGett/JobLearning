import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/tailwind.css';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>eJob Learning</title>
            </Head>
            <main className='min-h-[94.8vh] flex flex-col'>
                <Component {...pageProps}></Component>
            </main>
        </>
    );
};

export default MyApp;
