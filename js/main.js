const elList = document.querySelector("#content");
const elSearch = document.querySelector("#search");

function renderFilm(array) {
  for (let i = 0; i < array.length; i++) {
    const otherDate = new Date(array[i].release_date);
    const li = document.createElement("li");
    // create li
    li.innerHTML = `
        <li class="list__item">
            <h5>${array[i].title}</h5>
            <img class="list__img" src=${array[i].poster} alt="">
            <p class="info">${array[i].overview}</p>
            <span>Release: ${otherDate}</span>
            <button data-id="${array[i].id}" class="btn">Delete</button>
        </li>
    `;
    const ul = document.createElement("ul");

    // genres section
    array[i].genres.forEach((genre) => {
      const p = document.createElement("p");
      p.textContent = genre;
      p.className = "genries";

      ul.appendChild(p);
    });
    li.appendChild(ul);

    elList.appendChild(li);
  }
}

renderFilm(films);
films.forEach((film) => {
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
