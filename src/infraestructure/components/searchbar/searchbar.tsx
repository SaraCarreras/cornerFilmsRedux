import React, { SyntheticEvent } from "react";
import styles from "./searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
    };
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type={"text"}></input>
                <button className={styles.searchButton} type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </form>
    );
}
