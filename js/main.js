const elList = document.querySelector("#content");
const elSearch = document.querySelector("#search");
const elGenres = document.querySelector("#janry");
// render films
function renderFilm(array) {
  for (let i = 0; i < array.length; i++) {
    const otherDate = new Date(array[i].release_date);
    const year = otherDate.getFullYear();
    const month =
      otherDate.getMonth() + 1 < 10
        ? `0${otherDate.getMonth() + 1}`
        : otherDate.getMonth() + 1;
    const data =
      otherDate.getDate() + 1 < 10
        ? `0${otherDate.getDate() + 1}`
        : otherDate.getDate() + 1;
    const hour =
      otherDate.getHours() + 1 < 10
        ? `0${otherDate.getHours() + 1}`
        : otherDate.getHours() + 1;
    const minute =
      otherDate.getMinutes() + 1 < 10
        ? `0${otherDate.getMinutes() + 1}`
        : otherDate.getMinutes() + 1;

    // create li
    const li = document.createElement("li");
    li.innerHTML = `
        <li class="list__item">
            <h5>${array[i].title}</h5>
            <img class="list__img" src=${array[i].poster} alt="">
            <p class="info">${array[i].overview}</p>
            <span>Release: ${hour}:${minute}/${data}-${month}-${year}</span>
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

// delete
films.forEach((film) => {
  elList.addEventListener("click", function (evt) {
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
      elList.textContent = "";
      films = result;
      renderFilm(films);
    }
  });
});

// search section

elSearch.addEventListener("input", () => {
  const inputValue = elSearch.value;

  let searchArray = films.filter((text) => {
    if (text.title.toLowerCase().includes(inputValue.toLowerCase())) {
      return text;
    }
    if (text.overview.toLowerCase().includes(inputValue.toLowerCase())) {
      return text;
    }
  });
  elList.textContent = "";
  renderFilm(searchArray);
});

// Tab section
elGenres.addEventListener("click", (evt) => {
  const doIt = evt.target;
  const resultArray = [];
  if (doIt.className.includes("all")) {
    elList.textContent = "";
    renderFilm(films);
  }
  if (doIt.className.includes("actions")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Action") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("comedy")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Comedy") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("family")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Family") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("documentary")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Documentary") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("animation")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Animation") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("adventure")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Adventure") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("scienceFiction")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Science Fiction") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("horror")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Horror") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("thriller")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Thriller") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("fantasy")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Fantasy") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("mystery")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Mystery") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("drama")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Drama") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("movie")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "TV Movie") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("music")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Music") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("crime")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Crime") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("history")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "History") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
  if (doIt.className.includes("romance")) {
    for (let i = 0; i < films.length; i++) {
      const item = films[i];
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i] === "Romance") {
          resultArray.push(item);
        }
      }
    }
    elList.textContent = "";
    renderFilm(resultArray);
  }
});
