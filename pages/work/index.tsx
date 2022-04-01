import React, { useState } from 'react';
import { NextPage } from 'next'
import styles from '../../styles/Pages/Work.module.css'
import projects from '../../data/projects.js'
import WorkButton from '../../Components/UI/WorkButton';
import WorkPanel from '../../Components/UI/WorkPanel';

const Work: NextPage = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className={styles.content}>
            <h1 className={styles.content_title}>Work</h1>
            <div className={styles.content_projects}>
                <section className={styles.content_controls}>
                    {
                        projects.map(({ title }, i) => (
                            <WorkButton testid={`WorkButton_${title}`} title={title} key={i} selected={selected == i} func={() => { setSelected(i) }} />
                        ))
                    }

                </section>
                <section className={styles.content_panels}>
                    {
                        projects.map((project, i) => (
                            <WorkPanel testid={`WorkPanel_${project.title}`} project={project} selected={selected === i} key={project.id} />
                        )
                        )
                    }
                </section>
            </div>

        </div>
    );
};

export default Work;