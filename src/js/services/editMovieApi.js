export const editMovieApi = async (data, editedProductId) => {
  try {
    return await fetch(`http://localhost:3000/movies/${editedProductId}`, {
      method: "PUT",

      body: JSON.stringify(data),

      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
  } catch(error) {
    console.log(error)
  }

};
