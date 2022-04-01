import React from 'react';
import styles from '../../styles/Components/WorkButton.module.css'

type Props = {
    title: string;
    key: number;
    selected: boolean;
    func: any;
}

const WorkButton = ({ title, key, selected, func }: Props) => {
    return (
        <button className={`${styles.WorkButton} ${selected && styles.selected}`} onClick={func}>
            {title}
        </button>
    );
};

export default WorkButton;