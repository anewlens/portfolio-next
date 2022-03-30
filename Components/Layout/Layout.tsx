import React from 'react';
import Nav from './Nav';
import styles from '../../styles/Layout/Layout.module.css'

type LayoutProps = {
    children: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Nav />
            <main className={styles.main}>
                {children}
            </main>
        </>
    );
};

export default Layout;