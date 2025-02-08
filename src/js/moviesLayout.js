const moviesList = document.querySelector('.movies-list')
export const createMarkup = (moviesData) => {
    const makrup = moviesData.map(obj =>
        `<li class="movies-item" id="${obj.id}">
            <h2 class="movies-name">${obj.title}</h2>
            <p class="movies-genre">${obj.genre}</p>
            <p class="movies-director">${obj.director}</p>
            <p class="movies-year">${obj.year}</p>
             <div class="container">
            <button class="delete-btn" type="button">delete</button>
            <button class="edit-btn" type="button">edit</button>
            <button class="edit-part-btn">partially change</button>
             </div>
        </li>`
    ).join('')
    moviesList.insertAdjacentHTML("beforeend", makrup)
}