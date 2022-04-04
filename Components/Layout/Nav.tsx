import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles/Layout/Nav.module.css'

const Nav = () => {

    const path = useRouter().pathname

    return (
        <nav className={styles.nav}>
            <Link href='/'>
                <a className={styles.nav_home}><span>Robbie Carroll</span><span>web dev + design</span></a>
            </Link>
            <div className={styles.nav_group}>
                <Link href='/about'>
                    <a className={`${styles.nav_link} ${path == '/about' && styles.selected}`}>about</a>
                </Link>
                <Link href='/skills'>
                    <a className={`${styles.nav_link} ${path == '/skills' && styles.selected}`}>skills</a>
                </Link>
                <Link href='/work'>
                    <a className={`${styles.nav_link} ${path == '/work' && styles.selected}`}>work</a>
                </Link>
                <Link href='/contact'>
                    <a className={`${styles.nav_link} ${path == '/contact' && styles.selected}`}>contact</a>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;