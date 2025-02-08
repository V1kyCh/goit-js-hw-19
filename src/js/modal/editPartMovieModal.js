import { editPartMovie } from "../services/editPartMovieApi"

export const openEditPartModal = () => {
    const modalEditEl = document.querySelector('.backdrop-edit-part')
    const editBtnArr = document.querySelectorAll('.edit-part-btn')
    const formEl = document.querySelector('.edit-part-form-data')

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
        let productDataToEdit = {}
        if (formEl.elements.name.value !== "") {
            productDataToEdit.title = `${formEl.elements.name.value}`
            formEl.elements.name.value =''
        }
        if (formEl.elements.genre.value !== "") {
            productDataToEdit.genre = `${formEl.elements.genre.value}`
            formEl.elements.genre.value = ''
        }
        if (formEl.elements.director.value !== "") {
            productDataToEdit.director = `${formEl.elements.director.value}`
            formEl.elements.director.value = ''
        }        
        if (formEl.elements.year.value !== "") {
            productDataToEdit.year = `${formEl.elements.year.value}`
            formEl.elements.year.value = ''
        }
        editPartMovie(productDataToEdit, parentId)
    })

    const editModalClose = document.querySelector('.close-edit-part-modal')
    editModalClose.addEventListener('click', () => {
        modalEditEl.classList.add('is-hidden')
    })
}