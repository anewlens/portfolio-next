import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Layout/Nav.module.css'


const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link href='/'>
                <a className={styles.nav_home}><span>Robbie Carroll</span><span>web dev + design</span></a>
            </Link>
            <div className={styles.nav_group}>
                <Link href='/about'>
                    <a className={styles.nav_link}>about</a>
                </Link>
                <Link href='/skills'>
                    <a className={styles.nav_link}>skills</a>
                </Link>
                <Link href='/work'>
                    <a className={styles.nav_link}>work</a>
                </Link>
                <Link href='/contact'>
                    <a className={styles.nav_link}>contact</a>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;