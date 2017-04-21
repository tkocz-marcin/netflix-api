const module = {};

module.movieSearch = function() {
    const btn = document.querySelector('.btn-search');
    const createMovieInformation = function(inputValue, posterLink) {

        const movieDiv = document.createElement('div'),
            titleText = document.createElement('p'),
            posterImg = document.createElement('img'),
            mainContent = document.querySelector('.main-content');

        titleText.classList.add('title');
        titleText.innerText = inputValue;
        movieDiv.classList.add('movie-info');
        movieDiv.setAttribute('id', 'movie')
        posterImg.classList.add('poster');
        posterImg.setAttribute('src', posterLink);

        movieDiv.appendChild(posterImg);

        movieDiv.appendChild(titleText);
        mainContent.appendChild(movieDiv);
    }

    const removeMovieInformation = function() {
        const movieDiv = document.querySelector('#movie');
        if (movieDiv) {
            movieDiv.remove();
        };
    }

    const searchMovie = function() {
        const inputValue = document.querySelector('.search-input').value.toString();
        removeMovieInformation();

        netflixroulette.createRequest(inputValue, function(resp) {
                createMovieInformation(resp.show_title, resp.poster);          
        });
    }

    btn.addEventListener('click', searchMovie);
}();

module.movieSearch;























// // XML Response, resp is a document object
// netflixroulette.createRequest({
//     title: "The Boondocks",
//     year: 2005
// }, function (resp) {
//     console.log("The Boondocks' Summary = " + resp.querySelector("netflixroulette summary").innerHTML);
// }, true);

// // JSON Response, resp is a JSON object
// netflixroulette.createRequest({
//     title: "The Boondocks",
//     year: 2005
// }, function (resp) {
//     console.log("The Boondocks' Summary = " + resp.summary);
// });
