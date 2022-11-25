import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./spinner.module.scss";

export function Spinner() {
    return <FontAwesomeIcon icon={faSpinner} className={styles.spin} />;
}
