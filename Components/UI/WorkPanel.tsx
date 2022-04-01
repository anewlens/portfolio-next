import React from 'react';
import { ProjectTypes } from '../../data/types'
import styles from '../../styles/Components/WorkPanel.module.css'
import Github from '../SVGs/Github';
import ImageSwitcher from './ImageSwitcher';

type PropTypes = {
    project: ProjectTypes,
    selected: boolean

}

const WorkPanel = ({ project, selected }: PropTypes) => {

    const { title, subtitle, techStack, description, github, live, views } = project;

    return (
        <div className={`${styles.WorkPanel} ${selected && styles.selected}`} >
            <ImageSwitcher images={views} />
            <div className={`${styles.WorkPanel_content} `}>
                <h3 className={styles.WorkPanel_title} >{title}</h3>
                <p className={styles.WorkPanel_subtitle}>{subtitle}</p>
                <p className={styles.WorkPanel_techStack}>
                    {
                        techStack.map((tech, i) => (
                            <span key={i}>{tech}</span>
                        )
                        )
                    }
                </p>
                <p className={styles.WorkPanel_description}>{description}</p>
                {
                    (github || live) && (
                        <div className={styles.WorkPanel_buttons}>
                            {github && <a href={github} target="_blank" rel="noreferrer" className={styles.WorkPanel_github}><Github />Code</a>}
                            {live && <a href={live} target="_blank" rel="noreferrer" className={styles.WorkPanel_live}><span />Live</a>}
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default WorkPanel;