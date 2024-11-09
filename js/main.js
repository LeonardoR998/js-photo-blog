// Seleziona l'elemento HTML che conterrà le card
const cardRow = document.getElementById("card-row");

// Effettua una chiamata fetch per ottenere dati da un'API esterna
fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json()) // Converte la risposta in formato JSON
  .then((data) => {
    let cardHTML = ""; // Variabile per costruire il contenuto HTML

    // Ciclo sui dati ricevuti e crea il layout per ogni card
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

    // Inserisce l'HTML generato nel contenitore delle card
    cardRow.innerHTML = cardHTML;

    // Seleziona tutte le card
    const cards = document.querySelectorAll(".card");

    // EventListener per ogni card
    cards.forEach((card) => {
      card.addEventListener("click", (event) => {
        // Ignora il click se viene premuto il pulsante di chiusura
        if (event.target.closest(".close-btn")) {
          return;
        }
        // Apre la card
        card.classList.add("open");
        const closeButton = card.querySelector(".close-btn");
        closeButton.classList.remove("d-none");
        // Mostra il titolo della card cliccata nella console
        console.log(
          `Card cliccata: ${card.querySelector(".card-title").innerText}`
        );
      });

      // EventListener al pulsante di chiusura
      const closeButton = card.querySelector(".close-btn");
      closeButton.addEventListener("click", (event) => {
        // Chiusura card
        card.classList.remove("open");
        closeButton.classList.add("d-none");
      });
    });
  })
  .catch((error) => {
    // Gestisce eventuali errori durante la chiamata fetch
    console.error("Errore nel caricamento delle foto:", error);
  });
