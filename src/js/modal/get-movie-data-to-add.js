import { addMovie } from "../services/addMoviesApi"

const formEl = document.querySelector('.form-data')
const modalEl = document.querySelector('.backdrop-add')

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    modalEl.classList.add('is-hidden')
    const productDataToAdd = {
        title: `${formEl.elements.name.value}`,
        genre: `${formEl.elements.genre.value}`,
        director: `${formEl.elements.director.value}`,
        year: `${formEl.elements.year.value}`
    }
    addMovie(productDataToAdd)
})