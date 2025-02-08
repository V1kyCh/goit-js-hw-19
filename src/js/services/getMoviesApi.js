export const getMoviesAPI = async () => {
    let responce
    try {
        responce = await fetch('http://localhost:3000/movies').then(data => data.json())
    } catch (error) {
       responce = error
    }
    return responce
}
