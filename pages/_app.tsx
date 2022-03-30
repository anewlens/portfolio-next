import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../Components/Layout/Layout'
import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {

  const pageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }


  return (
    <Layout>
      <LazyMotion features={domAnimation}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <m.main
            key={router.route}
            variants={pageAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'linear' }}>
            <Component {...pageProps} />
          </m.main>
        </AnimatePresence>

      </LazyMotion>
    </Layout >
  )
}

export default MyApp
