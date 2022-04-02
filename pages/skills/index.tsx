import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Pages/Skills.module.css'

const Skills: NextPage = () => {
    return (
        <>
            <Head>
                <title>Skills | Robbie Carroll</title>
                <meta name="description" content="Robbie Carroll, web dev and designer based in Richmond, VA + remote" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.content}>
                <h1 className={styles.content_title}>Skills</h1>
                <section className={styles.content_section}>
                    <h2 className={styles.content_section_title}>Development</h2>
                    <ul className={styles.content_list}>
                        <li>HTML</li>
                        <li>CSS <ul>
                            <li>Sass</li>
                            <li>CSS Modules</li>
                        </ul></li>
                        <li>Javascript
                            <ul>
                                <li>Typescript</li>
                            </ul>
                        </li>
                        <li>React
                            <ul>
                                <li>Redux</li>
                                <li>Context</li>
                                <li>NextJS</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className={styles.content_list}>
                        <li>Node
                            <ul>
                                <li>Express</li>
                            </ul>
                        </li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                    </ul>
                </section>

                <section className={styles.content_section}>
                    <h2 className={styles.content_section_title}>Design</h2>
                    <ul className={styles.content_list}>
                        <li>Figma</li>
                        <li>Adobe <ul>
                            <li>Photoshop</li>
                            <li>InDesign</li>
                            <li>Illustrator</li>
                            <li>Premier</li>
                            <li>XD</li>
                        </ul></li>

                    </ul>

                </section>
            </div>
        </>
    );
};

export default Skills;