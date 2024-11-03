import React from "react";
import styles from "./marque.module.scss";
const Marquee = ({ children }: { readonly children: React.ReactNode }) => {
    return (
        <div className={styles.marqueContainer} >
            <div className={styles.marque}>
                {children}
            </div>
            <div className={styles.marque}>
                {children}
            </div>
            <div className={styles.marque}>
                {children}
            </div>
        </div>
    );
};


export default Marquee
