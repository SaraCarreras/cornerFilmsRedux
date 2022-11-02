import MovieCard from "../../../features/movies/components/pages/moviecard";
import home from "./home.module.scss";
function Home() {
    return (
        <>
            <h1 className={home.popularMovies}>Popular Movies</h1>
            <div className={home.movies}>
                <MovieCard />
            </div>
        </>
    );
}
export default Home;
