fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OWViYTFjMjUwNDAwMTUxYWI3MTciLCJpYXQiOjE3NDYxODE4MTksImV4cCI6MTc0NzM5MTQxOX0.PD6pLsce83Cf-NANpLxohykJOQTiAfGs3sEJgUox8lk",
  },
})
  .then((resp) => {
    if (resp.ok) {
      console.log(`responsive`, resp);
      return resp.json();
    } else {
      throw new Error(`errore nella chiamata`, resp.status);
    }
  })
  .then((array) => {
    array.forEach((element) => console.log(element));
  })
  .catch((error) => console.log(`error`, error));
