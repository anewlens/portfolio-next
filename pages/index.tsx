import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../Components/UI/NextPageLink'
import styles from '../styles/Pages/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robbie Carroll | Web Dev + Designer</title>
        <meta name="description" content="Robbie Carroll, web dev and designer based in Richmond, VA + remote" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
        <link rel="manifest" href="/img/icons/site.webmanifest" />
      </Head>

      <div className={styles.content}>
        <h1 className={styles.content_title}>
          Robbie Carroll
        </h1>
        <p className={styles.content_subhead}>Frontend dev + designer</p>
        <p className={styles.content_descript}>Richmond, VA + remote</p>
        <Button route="/about">
          Get to know me
        </Button>
      </div>

    </div>
  )
}

export default Home
