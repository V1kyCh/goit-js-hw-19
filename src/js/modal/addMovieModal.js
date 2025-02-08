const modalEl = document.querySelector('.backdrop-add')
const btnOpenModal = document.querySelector('.add-movie')
const btnCloseModal = document.querySelector('.close-modal')
btnOpenModal.addEventListener('click', (e) =>{
    e.preventDefault()
    modalEl.classList.remove('is-hidden')
})
btnCloseModal.addEventListener('click', (e) =>{
    e.preventDefault()
    modalEl.classList.add('is-hidden')
})