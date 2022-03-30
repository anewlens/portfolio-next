import React from 'react';
import { NextPage } from 'next'
import styles from '../../styles/Pages/Work.module.css'
import Button from '../../Components/Common/NextPageLink';

const Work: NextPage = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.content_title}>Work</h1>
            <Button route="/contact">
                Wanna talk?
            </Button>
        </div>
    );
};

export default Work;