import { createMarkup } from "../moviesLayout"
import { openEditModal } from "../modal/editMovieModal";
import { openEditPartModal } from "../modal/editPartMovieModal";
import { deleteMovie } from "../deletingMovie";
export const getMoviesAPI = () => {
    return fetch('http://localhost:3000/movies').then(data => data.json()).then(data => { createMarkup(data); openEditModal(); openEditPartModal(); deleteMovie() })
}