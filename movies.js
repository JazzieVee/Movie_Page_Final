//  http://www.omdbapi.com/?apikey=5c7ce648

function handleLocalStorage() {
const searchButton = document.getElementById('search__btn');
const searchInput = document.getElementById('search__input');


searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    localStorage.setItem('searchTerm', searchTerm);
    windown.location.href = 'movies.html';
});
}

     async function fetchMovies(searchTerm) {
       const apikey = '5c7ce648';
       const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

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
        movieElement.innerHTML = `<img src="${movie.Poster}" alt="${movie.Title} poster"><h3>${movie.Title}</h3><p>Genre: ${movie.Genre}</p><p>Runtime: ${movie.Runtime}</p>`;
        resultsContainer.appendChild(movieElement);
        });
    } else {
        resultsContainer.innerHTML = `<p>${data.Error}</p>`;
    }
}

    // searchInput.addEventListener('input',() => {
    //     const searchTerm = searchInput.value;
    //     if(searchTerm) {
    //         fetchMovies(searchTerm);
    //     } else {
    //         resultsContainer.innerHTML = '';
    //     }
    // });


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