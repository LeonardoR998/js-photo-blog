const cardRow = document.getElementById("card-row");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((data) => {
    let cardHTML = "";

    data.forEach((card) => {
      cardHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-5">
          <div class="card-wrapper position-relative h-100" data-id="${card.id}">
            <img src="./img/pin.svg" class="pin-icon" alt="Pin Icon">
            <div class="card h-100" data-id="${card.id}">
              <img src="${card.url}" class="card-img-top" alt="${card.title}">
              <div class="card-body">
                <h5 class="card-title text-center">${card.title}</h5>
                <button class="close-btn btn btn-danger position-absolute top-0 end-0 m-3 d-none">Chiudi</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    cardRow.innerHTML = cardHTML;

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".close-btn")) {
          return;
        }
        card.classList.add("open");
        const closeButton = card.querySelector(".close-btn");
        closeButton.classList.remove("d-none");
        console.log(
          `Card cliccata: ${card.querySelector(".card-title").innerText}`
        );
      });
      const closeButton = card.querySelector(".close-btn");
      closeButton.addEventListener("click", (e) => {
        card.classList.remove("open");

        closeButton.classList.add("d-none");
      });
    });
  })
  .catch((error) => {
    console.error("Errore nel caricamento delle foto:", error);
  });
