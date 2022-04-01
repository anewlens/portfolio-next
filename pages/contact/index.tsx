import React from 'react';
import { NextPage } from 'next'
import Github from '../../Components/SVGs/Github';
import Linkedin from '../../Components/SVGs/Linkedin';
import Instagram from '../../Components/SVGs/Instagram';
import Twitter from '../../Components/SVGs/Twitter';
import Email from '../../Components/SVGs/Email';
import styles from '../../styles/Pages/Contact.module.css'

const Contact: NextPage = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.content_title}>Contact</h1>
            <h2 className={styles.content_subtitle}>Want to reach out?</h2>
            <a className={styles.content_link} href="mailto:rccarroll3@gmail.com"><Email />rccarroll3@gmail.com</a>
            <a className={styles.content_link} href="https://github.com/anewlens"><Github />/anewlens</a>
            <a className={styles.content_link} href="https://linkedin/in/robbiecarro11"><Linkedin />/robbiecarro11</a>
            <a className={styles.content_link} href="https://instagram.com/robbiecarro11"><Instagram />@robbiecarro11</a>
            <a className={styles.content_link} href="https://twitter.com/robbiecarro11"><Twitter />@robbiecarro11</a>
        </div>
    );
};

export default Contact;