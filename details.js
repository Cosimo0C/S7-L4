const para = new URLSearchParams(window.location.search);
const id = para.get("phoneId");
console.log(id);
fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OWViYTFjMjUwNDAwMTUxYWI3MTciLCJpYXQiOjE3NDYxODE4MTksImV4cCI6MTc0NzM5MTQxOX0.PD6pLsce83Cf-NANpLxohykJOQTiAfGs3sEJgUox8lk",
  },
})
  .then((resp) => resp.json())
  .then((phone) => {
    const contPri = document.getElementById("container");
    const scritt = document.createElement("div");
    const title = document.createElement("h1");
    const brand = document.createElement("h2");
    const descri = document.createElement("p");
    const prezzo = document.createElement("h3");

    title.innerText = phone.name;
    brand.innerText = phone.brand;
    descri.innerText = phone.description;
    prezzo.innerText = phone.price + "€";

    contPri.classList.add("d-flex", "justify-content-center", "align-items-center");
    title.classList.add("text-white", "fw-bold", "my-5");
    brand.classList.add("text-secondary");
    descri.classList.add("text-light");
    prezzo.classList.add("text-success", "fw-semibold");

    scritt.appendChild(title);
    scritt.appendChild(brand);
    scritt.appendChild(descri);
    scritt.appendChild(prezzo);
    contPri.appendChild(scritt);
  })
  .catch((error) => console.log(`error`, error));
