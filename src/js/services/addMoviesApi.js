export const addMovie = async (addData) => {
  try {
    return fetch("http://localhost:3000/movies", {
      method: "POST",
      body: JSON.stringify(addData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
    } catch(error) {
      console.log(error)
    }

  };