import { addMovie } from "../services/addMoviesApi"

import { getMoviesAPI } from "../services/getMoviesApi";
import { createMarkup } from "../moviesLayout"
import { openEditModal } from "../modal/editMovieModal";
import { openEditPartModal } from "../modal/editPartMovieModal";
import { deleteMovie } from "../deletingMovie";

const formEl = document.querySelector('.form-data')
const modalEl = document.querySelector('.backdrop-add')

formEl.addEventListener('submit', async (e) => {
    e.preventDefault()
    modalEl.classList.add('is-hidden')
    const productDataToAdd = {
        title: `${formEl.elements.name.value}`,
        genre: `${formEl.elements.genre.value}`,
        director: `${formEl.elements.director.value}`,
        year: `${formEl.elements.year.value}`
    }
    await addMovie(productDataToAdd).then((data) => data)
    await getMoviesAPI().then(data => { createMarkup(data); openEditModal(); openEditPartModal(); deleteMovie() })
})