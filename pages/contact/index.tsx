import React from 'react';
import { NextPage } from 'next'
import Head from 'next/head';
import Github from '../../Components/SVGs/Github';
import Linkedin from '../../Components/SVGs/Linkedin';
import Instagram from '../../Components/SVGs/Instagram';
import Twitter from '../../Components/SVGs/Twitter';
import Email from '../../Components/SVGs/Email';
import styles from '../../styles/Pages/Contact.module.css'

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact | Robbie Carroll</title>
                <meta name="description" content="Robbie Carroll, web dev and designer based in Richmond, VA + remote" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
                <link rel="manifest" href="/img/icons/site.webmanifest" />
            </Head>
            <div className={styles.content}>
                <h1 className={styles.content_title}>Contact</h1>
                <h2 className={styles.content_subtitle}>Want to reach out?</h2>
                <a className={styles.content_link} target="_blank" rel="noreferrer" href="mailto:rccarroll3@gmail.com"><Email />rccarroll3@gmail.com</a>
                <a className={styles.content_link} target="_blank" rel="noreferrer" href="https://github.com/anewlens"><Github />/anewlens</a>
                <a className={styles.content_link} target="_blank" rel="noreferrer" href="https://linkedin.com/in/robbiecarro11"><Linkedin />/robbiecarro11</a>
                <a className={styles.content_link} target="_blank" rel="noreferrer" href="https://instagram.com/robbiecarro11"><Instagram />@robbiecarro11</a>
                <a className={styles.content_link} target="_blank" rel="noreferrer" href="https://twitter.com/robbiecarro11"><Twitter />@robbiecarro11</a>
            </div>
        </>
    );
};

export default Contact;