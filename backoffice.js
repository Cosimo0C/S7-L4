const para = new URLSearchParams(window.location.search);
const id = para.get("phoneId");

const form = document.getElementById("f-backoffice");
const titolo = document.getElementById("titolo");
titolo.classList.add("d-flex", "align-items-center");

document.getElementById("cancella").addEventListener("click", () => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OWViYTFjMjUwNDAwMTUxYWI3MTciLCJpYXQiOjE3NDYxODE4MTksImV4cCI6MTc0NzM5MTQxOX0.PD6pLsce83Cf-NANpLxohykJOQTiAfGs3sEJgUox8lk",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(`errore nella chiamata`, resp.status);
      }
    })
    .then((phone) => {
      alert("hai cancellato correttamente l'articolo");
    })
    .catch((error) => console.log(`error`, error));
});
document.getElementById("reset").addEventListener("click", function () {
  form.reset();
});
form.onsubmit = function (e) {
  e.prentDefault();
  const nome = document.getElementById("nome");
  const descrizione = document.getElementById("descrizione");
  const prezzo = document.getElementById("prezzo");
  const data = document.getElementById("data");

  const newPhone = {
    name: nome.value,
    description: descrizione.value,
    price: prezzo.value,
    time: data.value,
  };
  fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
    method: "POST",
    body: JSON.stringify(newPhone),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OWViYTFjMjUwNDAwMTUxYWI3MTciLCJpYXQiOjE3NDYxODE4MTksImV4cCI6MTc0NzM5MTQxOX0.PD6pLsce83Cf-NANpLxohykJOQTiAfGs3sEJgUox8lk",
    },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`errore nella chiamata`, resp.status);
      } else {
        return resp.json();
      }
    })
    .then((phone) => {
      alert("Nuovo cellulare inserito");
      form.reset();
    })
    .catch((error) => console.log(`error`, error));
};

const url = id ? "https://striveschool-api.herokuapp.com/api/product/" + id : "https://striveschool-api.herokuapp.com/api/product/";
const method = id ? "PUT" : "POST";

window.onload = function () {
  const lato = document.createElement("h4");
  lato.classList.add("text-light", "mx-2");
  titolo.appendChild(lato);
  if (id) {
    lato.innerText = `__Modifica`;
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OWViYTFjMjUwNDAwMTUxYWI3MTciLCJpYXQiOjE3NDYxODE4MTksImV4cCI6MTc0NzM5MTQxOX0.PD6pLsce83Cf-NANpLxohykJOQTiAfGs3sEJgUox8lk",
      },
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`errore nella chiamata`, resp.status);
        } else {
          return resp.json();
        }
      })
      .then((phone) => {
        const nome = (document.getElementById("nome").value = phone.name);
        const descrizione = (document.getElementById("descrizione").value = phone.description);
        const prezzo = (document.getElementById("prezzo").value = phone.price);
        const data = (document.getElementById("data").value = phone.data);
      })
      .catch((error) => console.log(`error`, error));
  } else {
    lato.innerText = `__Crea`;
  }
};
