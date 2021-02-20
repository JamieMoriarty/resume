import React from 'react';

import Head from 'next/head';
import styles from 'styles/Home.module.scss';

import CardGrid, { Card } from '@/components/frontpage/CardDisplay';
import Resume from '@/components/resume';
import TechStuff from '@/components/techs';
import PersonalStuff from '@/components/personal';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Martin S. Løyche</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="The personal website of (and personal advertisement for) Martin Søndergaard Løyche" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome!</h1>

                <CardGrid>
                    <Card title="Tech stuff" description="Summarized tech experience (languages, frameworks, etc.)">
                        <TechStuff />
                    </Card>
                    <Card title="Work stuff" description="A brief description of my professional experience">
                        <Resume />
                    </Card>
                    <Card title="Personal stuff" description="A bit of personal info about me">
                        <PersonalStuff />
                    </Card>
                </CardGrid>

                <div className={styles['eop-extra-info']}>
                    <p>
                        This SPA is a Next.js app, bootstrapped with create-next-app, and uses react-bootstrap for css and sass utilities. Check out
                        the{' '}
                        <a href="https://github.com/JamieMoriarty/resume" target="_blank" rel="noreferrer">
                            repo
                        </a>{' '}
                        for more details.
                    </p>
                    <p className={styles['wip-notice']}>This is work in progress. Watch out for changes in the near future!</p>
                </div>
            </main>
        </div>
    );
}
