import styles from "./noResults.module.scss";

export function NoResults() {
    return (
        <div className={styles.empty}>
            Sorry, there are no matching results{" "}
        </div>
    );
}
