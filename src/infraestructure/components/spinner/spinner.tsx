import styles from "./spinner.module.scss";

export function Spinner() {
    return (
        <div className={styles.container}>
            <div className={styles.spin}> </div>
        </div>
    );
}
