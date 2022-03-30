import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Components/Button.module.css'

type buttonProps = {
    children: string;
    route: string;
}

const Button = ({ children, route }: buttonProps) => {
    return (
        <Link href={route}>
            <a id="nextPageLink" className={styles.nextLink}>
                {children}
            </a>
        </Link>
    );
};

export default Button;