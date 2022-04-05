import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/Layout/Nav.module.css'

const Nav = () => {

    const path = useRouter().pathname

    const [open, toggleOpen] = useState(false)

    return (
        <nav className={styles.nav}>
            <Link href='/'>
                <a onClick={() => toggleOpen(false)} className={styles.nav_home}><span>Robbie Carroll</span><span>web dev + design</span></a>
            </Link>
            <div className={`${styles.nav_group} ${open && styles.open}`}>
                <Link href='/about'>
                    <a onClick={() => toggleOpen(false)} className={`${styles.nav_link} ${path == '/about' && styles.selected}`}>about</a>
                </Link>
                <Link href='/skills'>
                    <a onClick={() => toggleOpen(false)} className={`${styles.nav_link} ${path == '/skills' && styles.selected}`}>skills</a>
                </Link>
                <Link href='/work'>
                    <a onClick={() => toggleOpen(false)} className={`${styles.nav_link} ${path == '/work' && styles.selected}`}>work</a>
                </Link>
                <Link href='/contact'>
                    <a onClick={() => toggleOpen(false)} className={`${styles.nav_link} ${path == '/contact' && styles.selected}`}>contact</a>
                </Link>
                <button onClick={() => toggleOpen(!open)} className={styles.nav_mobileClose}>&#10005;</button>

            </div>
            <button onClick={() => toggleOpen(!open)} className={styles.nav_menuButton}>&#9868;</button>
        </nav>
    );
};

export default Nav;