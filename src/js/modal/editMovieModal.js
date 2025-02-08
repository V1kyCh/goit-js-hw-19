import { editMovieApi } from "../services/editMovieApi"

import { getMoviesAPI } from "../services/getMoviesApi";
import { createMarkup } from "../moviesLayout"
import { openEditModal } from "../modal/editMovieModal";
import { openEditPartModal } from "../modal/editPartMovieModal";
import { deleteMovie } from "../deletingMovie";

export const openEditModal = () => {
    const modalEditEl = document.querySelector('.backdrop-edit')
    const editBtnArr = document.querySelectorAll('.edit-btn')
    const formEl = document.querySelector('.edit-form-data')

    let parentId
    editBtnArr.forEach(editBtn => {
        editBtn.addEventListener('click', (e) => {
            modalEditEl.classList.remove('is-hidden')
            parentId = e.target.parentElement.parentElement.id
        })
    })

    formEl.addEventListener('submit', async (e) => {
        e.preventDefault()
        modalEditEl.classList.add('is-hidden')
        const productDataToEdit = {
            title: `${formEl.elements.name.value}`,
            genre: `${formEl.elements.genre.value}`,
            director: `${formEl.elements.director.value}`,
            year: `${formEl.elements.year.value}`
        }
        await editMovieApi(productDataToEdit, parentId).then((post) => post)
        await getMoviesAPI().then(data => { createMarkup(data); openEditModal(); openEditPartModal(); deleteMovie() })
    })

    const editModalClose = document.querySelector('.close-edit-modal')
    editModalClose.addEventListener('click', () => {
        modalEditEl.classList.add('is-hidden')
    })
}
