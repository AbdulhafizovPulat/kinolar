const elList = document.querySelector("#content");
const elSearch = document.querySelector("#search");

films.forEach((film) => {
  const otherDate = new Date(film.release_date);
  const li = document.createElement("li");
  // create li
  li.innerHTML = `
        <li class="list__item">
            <h5>${film.title}</h5>
            <img class="list__img" src=${film.poster} alt="">
            <p class="info">${film.overview}</p>
            <span>Release: ${otherDate}</span>
            <button data-id="${film.id}" class="btn">Delete</button>
        </li>
    `;
  const ul = document.createElement("ul");

  // genres section
  film.genres.forEach((genre) => {
    const p = document.createElement("p");
    p.textContent = genre;
    p.className = "genries";

    ul.appendChild(p);
  });
  li.appendChild(ul);

  elList.appendChild(li);

  // delete

  li.addEventListener("click", function (evt) {
    const element = evt.target;

    if (element.className.includes("btn")) {
      const id = Number(element.dataset.id);

      const result = [];
      for (let i = 0; i < films.length; i++) {
        const item = films[i];

        if (item.id != id) {
          result.push(item);
        }
      }
      li.textContent = "";
    }
  });

  elSearch.addEventListener("input", () => {
    const inputValue = elSearch.value;
    let searchArray = [];

    films.forEach((text) => {
      if (text.title.toLowerCase().includes(inputValue.toLowerCase())) {
        searchArray.push(text);
      }
    });
    // elList.append(searchArray);
    li.textContent = "";
  });
});
