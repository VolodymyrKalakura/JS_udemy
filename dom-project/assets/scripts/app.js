const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cencelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cencelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");
const movies = [];

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};
const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDelitionModal();
  clearMovieInputs();
};
const censelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
};
const clearMovieInputs = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};
const closeMovieDelitionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};
const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  closeMovieDelitionModal ();
  updateUI();
};
const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const censelDelitionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDelitionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDelitionButton.replaceWith(confirmDelitionButton.cloneNode(true)); 
  confirmDelitionButton = deleteMovieModal.querySelector(".btn--danger");
  censelDelitionButton.removeEventListener('click', closeMovieDelitionModal);

  censelDelitionButton.addEventListener("click", closeMovieDelitionModal);
  confirmDelitionButton.addEventListener(
    "click",
    deleteMovie.bind(null, movieId)
  );
};
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class = 'movie-element__image'>
        <img src = '${imageUrl}' alt = '${title}'>
    </div>
    <div class = 'movie-element__info'>
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.appendChild(newMovieElement);
};
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 0 ||
    +ratingValue > 5
  ) {
    alert("invalid values");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.imageUrl,
    newMovie.rating
  );
  updateUI();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cencelAddMovieButton.addEventListener("click", censelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
