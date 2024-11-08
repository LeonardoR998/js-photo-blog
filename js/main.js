const cardRow = document.getElementById("card-row");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((cards) => {
    console.log(cards);

    let cardHTML = "";

    cards.forEach((card) => {
      cardHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card h-100">
            <img src="${card.url}" class="card-img-top" alt="${card.title}">
            <div class="card-body">
              <h5 class="card-title text-center">${card.title}</h5>
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
