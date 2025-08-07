//  http://www.omdbapi.com/?apikey=5c7ce648

const movieListEl = document.querySelector('#movie__results');

     async function main () {
     const result = await fetch(`https://www.omdbapi.com/?apikey=5c7ce648&s=${''}`)
     const data = await result.json();
   
     movieListEl.innerHTML = data.Search.map((movie) => 
     movieHTML(movie)).join("");
     } 

     main();

    function movieHTML (movie) {
    return `<div class="movie__content">
    <figure class="movie__poster">
        <img src="${movie.Poster}" alt="" class="poster">
    </figure>
       <div class="movie__description">
        <h4 class="movie__title">${movie.Title}</h4>
        <p class="movie__genre">${movie.Genre}</p>
        <p class="movie__runtime">${movie.Runtime}</p>
    </div>
    </div>
     `
     }