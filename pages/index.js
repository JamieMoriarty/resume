import React from 'react';

import Head from 'next/head';
import styles from 'styles/Home.module.scss';

import FrontPageCard from '@/components/frontpage/Card';
import Resume from '@/components/resume';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Martin S. Løyche</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome!</h1>

                <div className={styles.description}>
                    <p>Work is in progress on this page.</p>
                    <p>You can find a resumé-like summary of my professional experience below. More things to come.</p>
                </div>

                <div className={styles.grid}>
                    <FrontPageCard title="Experience" description="A brief description of my professional experience">
                        <Resume />
                    </FrontPageCard>
                </div>
            </main>
        </div>
    );
}
