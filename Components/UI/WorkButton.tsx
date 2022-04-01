import React from 'react';
import styles from '../../styles/Components/WorkButton.module.css'

type Props = {
    testid: string;
    title: string;
    key: number;
    selected: boolean;
    func: any;
}

const WorkButton = ({ testid, title, key, selected, func }: Props) => {
    return (
        <button testid={testid} className={`${styles.WorkButton} ${selected && styles.selected}`} onClick={func}>
            {title}
        </button>
    );
};

export default WorkButton;