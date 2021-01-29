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
            title="Resumé"
            description="A brief description of everything relevant to future employers :)"
          />
        </div>
      </main>
    </div>
  )
}
