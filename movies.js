//  http://www.omdbapi.com/?apikey=5c7ce648

const searchButton = document.getElementById('search__btn');
const searchInput = document.getElementById('search__input');
const resultsContainer = document.getElementById('movie__results');


     async function fetchMovies(searchTerm) {
       const apiKey = '5c7ce648';
       const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

    try {
     const result = await fetch(url);
     const data = await result.json();
     displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    } 

    function displayResults(data) {
        resultsContainer.innerHTML = '';
     if(data.Response === "True") {
        data.Search.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.innerHTML = `<img src="${movie.Poster}" class="movie__poster--img"><h3 class="movie__title">${movie.Title}</h3><p>Year: ${movie.Year}</p>`;
        resultsContainer.appendChild(movieElement);
        });
    } else {
        resultsContainer.innerHTML = `<p>${data.Error}</p>`;
    }
}

searchInput.addEventListener('input',() => {
    const searchTerm = searchInput.value;
    if (searchTerm) {
        fetchMovies(searchTerm);
    } else {
        resultsContainer.innerHTML = '';     
    }
});

searchButton.addEventListener('click',() => {
    const searchTerm = searchInput.value;
    localStorage.setItem('searchTerm', searchTerm);
    windown.location.href = 'movies.html';
});




    // function movieHTML (movie) {
    // return `<div class="movie__content">
    // <figure class="movie__poster">
    //     <img src="${movie.Poster}" alt="" class="poster">
    // </figure>
    //    <div class="movie__description">
    //     <h4 class="movie__title">${movie.Title}</h4>
    //     <p class="movie__genre">${movie.Genre}</p>
    //     <p class="movie__runtime">${movie.Runtime}</p>
    // </div>
    // </div>
    //  `
    //  }