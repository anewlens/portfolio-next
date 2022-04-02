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
                            <Image alt={image} src={`/img/${image}`} width='1440' height='900' placeholder='blur' blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mO0qGmqZyACMI4qpK9CAOWiER1fkjBCAAAAAElFTkSuQmCC" priority />
                        </div>
                    )
                })
            }
            <div className={styles.ImageSwitcher_controls}>
                {
                    images.map((image, i) => (
                        <button key={i} onClick={() => setSelected(i)}
                            className={`${styles.ImageSwitcher_button} ${selected == i && styles.selected}`}>

                        </button>
                    ))
                }
            </div>
        </div>


    );
};

export default ImageSwitcher;