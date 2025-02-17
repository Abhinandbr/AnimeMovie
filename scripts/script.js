const animeCards = document.querySelectorAll(".anime-card");

animeCards.forEach((card) => {
  card.addEventListener("click", () => {
    localStorage.setItem("anime", card.querySelector("h3").textContent);
    window.location.href = "pages/stream.html";
  });
});

const searchInput = document.querySelector(".search-anime");

searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();

  animeCards.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    if (title.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
