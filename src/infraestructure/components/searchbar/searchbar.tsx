import React, { SyntheticEvent, useEffect, useState } from "react";
import styles from "./searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const [query] = useSearchParams();
    const search = query.get("search");

    useEffect(() => {
        setSearchText(search || "");
    }, [setSearchText, search]);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type={"text"}
                    value={searchText}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearchText(value);
                        navigate("/?search=" + value);
                    }}
                ></input>
                <button className={styles.searchButton} type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </form>
    );
}
// export default function SearchBar() {
//     const navigate = useNavigate();
//     const [searchText, setSearchText] = useState("");
//     const handleSubmit = (e: SyntheticEvent) => {
//         e.preventDefault();
//     };
//     return (
//         <form className={styles.searchContainer} onSubmit={handleSubmit}>
//             <div className={styles.searchBox}>
//                 <input
//                     className={styles.searchInput}
//                     type={"text"}
//                     value={searchText}
//                     onChange={(e) => {
//                         const value = e.target.value;
//                         navigate("/?search=" + value);
//                         setSearchText(value);
//                     }}
//                 ></input>
//                 <button className={styles.searchButton} type="submit">
//                     <FontAwesomeIcon icon={faMagnifyingGlass} />
//                 </button>
//             </div>
//         </form>
//     );
// }
