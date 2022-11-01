import MoviesList from "../../../features/movies/components/pages/movieslist";
import home from "./home.module.scss";
function Home() {
    return (
        <>
            <h1 className={home.popularMovies}>Popular Movies</h1>
            <div className={home.movies}>
                <MoviesList />
            </div>
        </>
    );
}
export default Home;
