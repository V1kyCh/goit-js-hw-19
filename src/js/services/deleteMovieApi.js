export const deleteMovieApi = async (id) => {
  try {
    return await fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
    } catch(error) {
      console.log(error)
    }
  };
  