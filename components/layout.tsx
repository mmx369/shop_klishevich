import React from 'react';
import Head from 'next/head';
import { Nav } from './Nav';

type TProps = {
    children: React.ReactNode;
    title: string;
};

export default function Layout({ children, title }: TProps) {

    return (
        <div className="container">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <header>
              <Nav/>
            </header>
            <main>
                <h1>{title}</h1>
                <div style={{ flexGrow: 1 }}>{children}</div>
            </main>
            <footer>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <b>The Klishevich Shop Project</b>
                </a>
            </footer>
        </div>
    );
}
