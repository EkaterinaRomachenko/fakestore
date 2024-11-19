import React, { FC } from "react";
import styles from "./notReviews.module.css";

const NotReviews: FC = () => {
    return (
        <div className={styles.notReviews}>
            <p className={styles.notReviews__text}>Отзывов пока нет...</p>
        </div>
    );
};

export default NotReviews;