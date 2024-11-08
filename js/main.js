const cardRow = document.getElementById("card-row");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((cards) => {
    console.log(cards);

    let cardHTML = "";

    cards.forEach((card) => {
      cardHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-5">
          <div class="card-wrapper position-relative h-100">
            <img src="./img/pin.svg" class="pin-icon" alt="Pin Icon">
            <div class="card h-100">
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
  })

  .catch((error) => {
    console.error("Errore nel caricamento delle foto:", error);
  });
