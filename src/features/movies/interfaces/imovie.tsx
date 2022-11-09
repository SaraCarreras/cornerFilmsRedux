export interface iMovie {
    title: string;
    id: number;
    poster_path: string;
    overview: string;
    vote_average: number;
    genres?: { id: number; name: "" }[] | null;
}
