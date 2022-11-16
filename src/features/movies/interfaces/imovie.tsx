export interface iMovie {
    title: string;
    id: number;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

export type iParam = {
    movieId: string;
};
