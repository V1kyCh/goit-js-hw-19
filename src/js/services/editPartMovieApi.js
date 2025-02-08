export const editPartMovie = (data, editedProductId) => {
    console.log(data)
    const options = {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
    };
    fetch(`http://localhost:3000/movies/${editedProductId}`, options)
        .then(response => response.json())
        .then(post => console.log(post))
        .catch(error => console.log("ERROR" + error));
};
