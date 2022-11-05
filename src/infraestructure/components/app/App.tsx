import { Route, Routes, Navigate } from "react-router-dom";
import Favorites from "../../../features/favorites/components/pages/favorites";
import MovieDetails from "../../../features/movies/components/pages/moviedetails";

import { initializeFirebaseApp } from "../../services/firebase";
import Layout from "../layout/layout/layout";
import Home from "../pages/home";

function App() {
    initializeFirebaseApp();

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/movie" element={<MovieDetails />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </Layout>
    );
}

export default App;
