import { useSearchParams } from "react-router-dom";
import MovieCard from "../../../features/movies/components/pages/moviecard";
import { useDebounce } from "../../hooks/usedebounce";
import SearchBar from "../searchbar/searchbar";

function Home() {
    const [query] = useSearchParams();
    const search: string = query.get("search") ?? "";
    const debouncedSearch = useDebounce(search, 400);
    return (
        <>
            <SearchBar />
            <MovieCard key={debouncedSearch} search={debouncedSearch} />
        </>
    );
}
export default Home;
