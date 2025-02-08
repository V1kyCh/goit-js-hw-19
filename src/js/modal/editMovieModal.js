import { editMovie } from "../services/editMovieApi"
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

    formEl.addEventListener('submit', (e) => {
        e.preventDefault()
        modalEditEl.classList.add('is-hidden')
        const productDataToEdit = {
            title: `${formEl.elements.name.value}`,
            genre: `${formEl.elements.genre.value}`,
            director: `${formEl.elements.director.value}`,
            year: `${formEl.elements.year.value}`
        }
        editMovie(productDataToEdit, parentId)
    })

    const editModalClose = document.querySelector('.close-edit-modal')
    editModalClose.addEventListener('click', () => {
        modalEditEl.classList.add('is-hidden')
    })
}
