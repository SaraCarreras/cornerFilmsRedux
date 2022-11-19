import React, { SyntheticEvent, useState } from "react";
import styles from "./searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        navigate("/?search=" + searchText);
    };
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type={"text"}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button className={styles.searchButton} type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </form>
    );
}
