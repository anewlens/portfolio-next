import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Pages/Skills.module.css";

const Skills: NextPage = () => {
  return (
    <>
      <Head>
        <title>Skills | Robbie Carroll</title>
        <meta
          name="description"
          content="Robbie Carroll, web dev and designer based in Richmond, VA + remote"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/icons/site.webmanifest" />
      </Head>
      <div className={styles.content}>
        <h1 className={styles.content_title}>Skills</h1>
        <section className={styles.content_section}>
          <h2 className={styles.content_section_title}>Development</h2>
          <ul className={styles.content_list}>
            <li>HTML / CSS</li>
            <li>
              Javascript
              <ul>
                <li>Typescript</li>
              </ul>
            </li>
            <li>
              React
              <ul>
                <li>NextJS</li>
              </ul>
            </li>
            <li>
              Testing{" "}
              <ul>
                {" "}
                <li>Cypress</li>
                <li>Jest</li>
              </ul>
            </li>
          </ul>
          <ul className={styles.content_list}>
            <li>
              Node
              <ul>
                <li>Express</li>
              </ul>
            </li>
            <li>AWS</li>
            <li>MongoDB</li>
            <li>SQL</li>
          </ul>
        </section>

        <section className={styles.content_section}>
          <h2 className={styles.content_section_title}>Design</h2>
          <ul className={styles.content_list}>
            <li>Figma</li>
            <li>
              Adobe{" "}
              <ul>
                <li>Photoshop</li>
                <li>InDesign</li>
                <li>Illustrator</li>
                <li>Premier</li>
                <li>XD</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Skills;
