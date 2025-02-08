export const deleteMovieApi = (id) => {
    return fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
    })
      .then((data) => data)
      .catch((error) => console.log("Error:", error))
  };
  