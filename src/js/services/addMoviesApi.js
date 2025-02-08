export const addMovie = (addData) => {
    const options = {
      method: "POST",
      body: JSON.stringify(addData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    return fetch("http://localhost:3000/movies", options)
      .then((data) => data.json())
      .then((data) => data)
      .catch((error) => console.log(error));
  };