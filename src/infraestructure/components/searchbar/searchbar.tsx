import React from "react";
import styles from "./searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    return (
        <form className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type={"text"}></input>
                <button className={styles.searchButton} type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </form>
    );
}
