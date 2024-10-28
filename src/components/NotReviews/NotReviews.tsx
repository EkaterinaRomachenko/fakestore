import React, { FC } from "react";
import styles from "./notReviews.module.css";

const NotReviews: FC = () => {
    return (
        <div className={styles.notReviews}>
            <p className={styles.notReviews__text}>No reviews have been left here yet...</p>

        </div>
    );
};

export default NotReviews;