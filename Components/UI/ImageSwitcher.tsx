import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../styles/Components/ImageSwitcher.module.css'

const ImageSwitcher = ({ images }: { images: string[] }) => {

    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.ImageSwitcher}>
            {
                images.map((image: string, i: number) => {
                    return (
                        <div key={i} className={`${styles.ImageSwitcher_imgContainer} ${selected == i && styles.selected}`}>
                            <button className={styles.ImageSwitcher_prev} onClick={() => { if (selected > 0) { setSelected(selected - 1) } }}>&#10097;</button>

                            <Image alt={image} src={`/img/${image}`} width='1440' height='900' placeholder='blur' blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mO0qGmqZyACMI4qpK9CAOWiER1fkjBCAAAAAElFTkSuQmCC" priority />

                            <button className={styles.ImageSwitcher_next} onClick={() => { if (selected < images.length - 1) { setSelected(selected + 1) } }}>&#10097;</button>
                        </div>
                    )
                })
            }
            <div className={styles.ImageSwitcher_controls}>
                <span className={styles.ImageSwitcher_controls_label}>Views</span>
                <div className={styles.ImageSwitcher_controls_buttons}>
                    {
                        images.map((image, i) => (

                            <button key={i} onClick={() => setSelected(i)}
                                className={`${styles.ImageSwitcher_button} ${selected == i && styles.selected}`}>
                                <span hidden>View {image}</span>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>


    );
};

export default ImageSwitcher;