import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/tailwind.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <>
        <main className='min-h-[94.8vh] flex flex-col'>
            <Component {...pageProps} ></Component>
        </main>
    </>
};

export default MyApp;