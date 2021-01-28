import Head from 'next/head'
import styles from '../styles/Home.module.css'

import FrontPageAction from '../src/components/frontpage/actions/Action'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <FrontPageAction 
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
            href="https://nextjs.org/docs"
          />
          <FrontPageAction 
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
            href="https://nextjs.org/learn"
          />
          <FrontPageAction 
            title="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
            href="https://github.com/vercel/next.js/tree/master/examples"
          />
          <FrontPageAction 
            title="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
