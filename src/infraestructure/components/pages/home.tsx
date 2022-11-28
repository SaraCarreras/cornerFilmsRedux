import { useSearchParams } from "react-router-dom";
import MovieCard from "../../../features/movies/components/pages/moviecard";
import { useDebounce } from "../../hooks/usedebounce";

import SearchBar from "../searchbar/searchbar";
import styles from "./home.module.scss";
function Home() {
    const [query] = useSearchParams();
    const search: string = query.get("search") ?? "";
    const debouncedSearch = useDebounce(search, 400);
    return (
        <>
            <SearchBar />
            <h1 className={styles.popularMovies}>Popular Movies</h1>
            <div className={styles.movies}>
                <MovieCard key={debouncedSearch} search={debouncedSearch} />
            </div>
        </>
    );
}
export default Home;
