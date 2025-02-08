export const editMovie = (data, editedProductId) => {
  const options = {
    method: "PUT",

    body: JSON.stringify(data),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  fetch(`http://localhost:3000/movies/${editedProductId}`, options)
    .then((response) => response.json())

    .then((post) => post)

    .catch((error) => console.log("ERROR" + error));
};
