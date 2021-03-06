import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Components/Layout/Layout'
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from 'framer-motion'
import styles from '../styles/Layout/Layout.module.css'


function MyApp({ Component, pageProps, router }: AppProps) {

  const pageAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: .5
      }
    },
    exit: { opacity: 0 }
  }


  return (
    <Layout>
      <LazyMotion features={domAnimation}>
        <m.main
          key={router.route}
          variants={pageAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'linear' }}
          className={styles.main}>

          <Component {...pageProps} />
        </m.main>

      </LazyMotion>
    </Layout >
  )
}

export default MyApp
