const caricamento = (boolean) => {
  const load = document.querySelector(".spinner-border");
  if (boolean) {
    load.classList.add("d-none");
  } else {
    load.classList.remove("d-none");
  }
};

fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OWViYTFjMjUwNDAwMTUxYWI3MTciLCJpYXQiOjE3NDYxODE4MTksImV4cCI6MTc0NzM5MTQxOX0.PD6pLsce83Cf-NANpLxohykJOQTiAfGs3sEJgUox8lk",
  },
})
  .then((resp) => {
    caricamento(false);
    if (resp.ok) {
      console.log(`responsive`, resp);
      return resp.json();
    } else {
      throw new Error(`errore nella chiamata`, resp.status);
    }
  })
  .then((array) => {
    array.forEach((element) => {
      const para = new URLSearchParams(window.location.search);
      const id = para.get("phoneId");
      const cardC = document.getElementById("card");
      const sottoCard = document.createElement("div");
      const img = document.createElement("img");
      const h2iti = document.createElement("h2");
      const h4pre = document.createElement("h4");
      const contDescr = document.createElement("div");
      const descr = document.createElement("p");
      const contButt = document.createElement("div");
      const buttonDet = document.createElement("a");
      const buttonMod = document.createElement("a");
      const buttonDele = document.createElement("a");
      const imgDele = document.createElement("img");

      caricamento(true);
      h2iti.innerText = element.name;
      h2iti.classList.add("text-custom");
      h4pre.innerText = element.price + "€";
      h4pre.classList.add("text-primary");
      contDescr.classList.add("d-flex", "justify-content-between");
      descr.innerText = element.description;
      descr.classList.add("text-custom", "fw-semibold", "text-truncate");
      img.src = element.imageUrl;
      img.alt = "imagine telefono";
      img.classList.add("img-fluid", "object-fit-contain", "w-100");
      img.style.height = "200px";
      buttonDet.href = `./details.html?phoneId=${element._id}`;
      buttonDet.innerText = "scopri di più";
      buttonDet.classList.add("btn", "text-info");
      buttonMod.href = `./backoffice.html?phoneId=${element._id}`;
      buttonMod.innerText = "Modifica";
      buttonMod.classList.add("btn", "btn-warning");
      imgDele.src =
        "data:image/png;base64,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";
      imgDele.alt = "logo delete";
      imgDele.width = "50";
      imgDele.height = "50";
      buttonDele.classList.add("border-0", "p-0");
      buttonDele.href = `./backoffice.html?phoneId=${element._id}`;
      contButt.classList.add("d-flex", "justify-content-between");
      sottoCard.classList.add("d-flex", "card", "w-25", "my-5", "border-0");
      cardC.classList.add("d-flex", "gap-5");

      sottoCard.appendChild(img);
      sottoCard.appendChild(h2iti);
      sottoCard.appendChild(h4pre);
      sottoCard.appendChild(contDescr);
      contDescr.appendChild(descr);
      contDescr.appendChild(buttonDet);
      sottoCard.appendChild(contButt);
      buttonDele.appendChild(imgDele);
      contButt.appendChild(buttonMod);
      contButt.appendChild(buttonDele);
      cardC.appendChild(sottoCard);
    });
  })
  .catch((error) => console.log(`error`, error));
