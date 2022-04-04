import React, { useState } from 'react';
import { NextPage } from 'next'
import Head from 'next/head';
import styles from '../../styles/Pages/Work.module.css'
import projects from '../../data/projects.js'
import WorkButton from '../../Components/UI/WorkButton';
import WorkPanel from '../../Components/UI/WorkPanel';

const Work: NextPage = () => {

    const [selected, setSelected] = useState(0)

    return (
        <>
            <Head>
                <title>Work | Robbie Carroll</title>
                <meta name="description" content="Robbie Carroll, web dev and designer based in Richmond, VA + remote" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.content}>
                <div className={styles.content_projects}>
                    <h1 className={styles.content_title}>Work</h1>
                    <section className={styles.content_controls}>
                        {
                            projects.map(({ title }, i) => (
                                <WorkButton title={title} key={i} selected={selected == i} func={() => { setSelected(i) }} />
                            ))
                        }
                        <div className={`content_controls_marker`}></div>
                        <style jsx>
                            {`
                            .content_controls_marker {
                                position: absolute;
                                top: 0;
                                right: 0;
                                z-index: 10;
                                width: 100%;
                                height: var(--buttonHeight);
                                background: transparent;
                                border-right: 1px solid white;
                                transform: translateY(calc(${selected} * var(--buttonHeight)));
                                transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                                z-index: 1;
                            }
                            `}
                        </style>
                    </section>
                </div>
                <section className={styles.content_panels}>
                    {
                        projects.map((project, i) => (
                            <WorkPanel project={project} selected={selected === i} key={project.id} />
                        )
                        )
                    }
                </section>

            </div>
        </>
    );
};

export default Work;