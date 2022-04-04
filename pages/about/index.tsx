import React from 'react';
import Head from 'next/head';
import { NextPage, } from 'next'
import styles from '../../styles/Pages/About.module.css'

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About | Robbie Carroll</title>
                <meta name="description" content="Robbie Carroll, web dev and designer based in Richmond, VA + remote" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
                <link rel="manifest" href="/img/icons/site.webmanifest" />
            </Head>
            <div className={styles.content}>
                <h1 className={styles.content_title}>About</h1>
                <p className={styles.content_para}>Hi, I’m Robbie, a web developer and sometimes designer in  Richmond, VA. Currently I’m building UI and department sites at <a href="/img/iconshttps://medschool.vcu.edu" rel='noreferrer' target="_blank" > VCU School of Medicine</a> and working on BiteBook, a recipe repository app.</p>
                <p className={styles.content_para}>Out of college, I started as a copywriter,  but have worked as a self-taught developer since 2019, working within the TerminalFour CMS by day and React by night. </p>
                <p className={styles.content_para}>On the weekend, I do light woodworking, build speakers and play D&D. </p>
            </div>
        </>
    );
};

export default About;