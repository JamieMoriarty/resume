import React from 'react';

import Head from 'next/head';
import styles from 'styles/Home.module.scss';

import FrontPageCard from '@/components/frontpage/Card';
import Resume from '@/components/resume';
import TechStuff from '@/components/techs';
import PersonalStuff from '@/components/personal';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Martin S. Løyche</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome!</h1>

                <div className={styles.grid}>
                    <FrontPageCard title="Tech stuff" description="Summarized tech experience (languages, frameworks, etc.)">
                        <TechStuff />
                    </FrontPageCard>
                    <FrontPageCard title="Work stuff" description="A brief description of my professional experience">
                        <Resume />
                    </FrontPageCard>
                    <FrontPageCard title="Personal stuff" description="A bit of personal info about me">
                        <PersonalStuff />
                    </FrontPageCard>
                </div>

                <p className={styles['wip-notice']}>This is work in progress. Watch out for changes in the near future!</p>
            </main>
        </div>
    );
}
