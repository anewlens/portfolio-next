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
        <link rel="icon" href="/favicon.ico" />
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
