import React, { useState } from 'react';
import { NextPage } from 'next'
import Head from 'next/head';
import styles from '../../styles/Pages/Work.module.css'
import projects from '../../data/projects.js'
import WorkButton from '../../Components/UI/WorkButton';
import WorkPanel from '../../Components/UI/WorkPanel';
import { ProjectTypes } from '../../data/types'

const Work: NextPage = () => {

    const [selected, setSelected] = useState(0)

    const groupByCategory = (list: ProjectTypes[]): ProjectTypes[][] => {
        let newList: ProjectTypes[][] = []
        let categories: string[] = []
        list.forEach((item: ProjectTypes) => {
            if (!categories.some(category => category == item.category)) {
                categories.push(item.category);
            } else {
                console.log('none')
            }
        })
        categories.forEach((category) => {
            let categoryGroup = list.filter(item => item.category == category)
            newList.push(categoryGroup)
        })

        return newList
    }

    return (
        <>
            <Head>
                <title>Work | Robbie Carroll</title>
                <meta name="description" content="Robbie Carroll, web dev and designer based in Richmond, VA + remote" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
                <link rel="manifest" href="/img/icons/site.webmanifest" />
            </Head>
            <div className={styles.content}>
                <div className={styles.content_projects}>
                    <h1 className={styles.content_title}>Work</h1>
                    <section className={styles.content_controls}>
                        {
                            groupByCategory(projects).map((category: ProjectTypes[], i: number) => {
                                let label = category[0].category
                                return (
                                    <>
                                        <span key={i} className={styles.content_controls_label}>{label}</span>
                                        {
                                            category.map(item => (
                                                <WorkButton title={item.title} key={item.id} selected={selected == item.id} func={() => { setSelected(item.id) }} />
                                            ))
                                        }
                                    </>
                                )
                            })
                        }
                        {/* <div className={`content_controls_marker`}></div>
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
                        </style> */}
                    </section>
                </div>
                <section className={styles.content_panels}>
                    {



                        projects.map((project, i) => (
                            <WorkPanel project={project} selected={selected === project.id} key={project.id} />
                        )
                        )
                    }
                </section>

            </div>
        </>
    );
};

export default Work;