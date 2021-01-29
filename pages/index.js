import Head from 'next/head'
import styles from 'styles/Home.module.scss'

import FrontPageCard from '@/components/frontpage/card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin S. Løyche</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
        </h1>

        <div className={styles.description}>
          <p>
            This will initially be all playground for me and hopefully transition to a display case for my talents along the way :)
          </p>
          <p>
            For now, it includes a resumé, and not much else.
          </p>
        </div>

        <div className={styles.grid}>
          <FrontPageCard 
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
            href="https://nextjs.org/docs"
          />
          <FrontPageCard 
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
            href="https://nextjs.org/learn"
          />
          <FrontPageCard 
            title="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
            href="https://github.com/vercel/next.js/tree/master/examples"
          />
          <FrontPageCard 
            title="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          />
        </div>
      </main>
    </div>
  )
}
