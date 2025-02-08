import { getMoviesAPI } from "./services/getMoviesApi";

import { createMarkup } from "./moviesLayout"
import { openEditModal } from "./modal/editMovieModal";
import { openEditPartModal } from "./modal/editPartMovieModal";
import { deleteMovie } from "./deletingMovie";
getMoviesAPI().then(data => { createMarkup(data); openEditModal(); openEditPartModal(); deleteMovie() })