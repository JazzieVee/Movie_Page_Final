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
        const limitedResults = data.Search.slice(0,6);
        limitedResults.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'resultBox';
        movieElement.innerHTML = 
        `<img src="${movie.Poster}" class="movie__poster--img">
        <h3 class="movie__title">${movie.Title}</h3>
        <p>Year: ${movie.Year}</p>`;
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
    window.location.href = `movies.html?search=${encodeURIComponent(searchTerm)}`;
});

    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');

    setTimeout(() => {
    if(searchTerm) {
        fetchMovies(searchTerm);
    };
}, 2000); 
