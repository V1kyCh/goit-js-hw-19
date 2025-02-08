import { deleteMovieApi } from "./services/deleteMovieApi";

import { getMoviesAPI } from "./services/getMoviesApi";
import { createMarkup } from "./moviesLayout"
import { openEditModal } from "./modal/editMovieModal";
import { openEditPartModal } from "./modal/editPartMovieModal";
import { deleteMovie } from "./deletingMovie";

export const deleteMovie = () =>{
    const deleteBtnArr = document.querySelectorAll('.delete-btn')
    deleteBtnArr.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', async ()=>{
            await deleteMovieApi(deleteBtn.parentElement.parentElement.id).then(data => data)
            await getMoviesAPI().then(data => { createMarkup(data); openEditModal(); openEditPartModal(); deleteMovie() })
        })
    })
}





