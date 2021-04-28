var media = document.querySelector("#media");
var genreDropDown = document.querySelector("#genre");

// Search execution function
var searchMedia = function () {
    if (media.value == "tv") {
        tvSearch();
    } else if (media.value == "movie") {
        movieSearch();
    } else if (media.value == "game") {
        gameSearch();
    }
};

// genre id

// Movie search function
var movieSearch = function () {
    genre = genreDropDown.value;    

    var tmdbUrl =
        "https://api.themoviedb.org/3/discover/movie?api_key=159f40037d6a65fa5a6290ec992f31ce&language=en-US&with_genres=" + genre;
    fetch(tmdbUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to TMDB API!");
        });
}
    // .then(function(response){
    //     if (response.ok){
    //         response.json()
    //         .then(function(data){
    //             console.log(data);
    //             for (i = 0; i < data.results.length; i++) {
    //                 console.log(data.results[i]);
    //                 data.results[i];
    //             }
    //         });
    //     }else{
    //         alert('Error: ' + response.statusText);
    //     }
    // })
    // .catch(function(error){
    //     alert("Unable to connect to TMDB API!");
    // }); 

// tv genre ids =
// action & adventure - 10759
// comedy - 35
// drama - 18
// mystery - 9648
// scifi and fantasy - 10765


// Tv search function
var tvSearch = function () {
    var tmdbTv =
        "https://api.themoviedb.org/3/genre/tv/list?api_key=159f40037d6a65fa5a6290ec992f31ce&" ;
        fetch(tmdbTv)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log(data);
                    });
                } else {
                    alert("Error: " + response.statusText);
                }
            })
            .catch(function (error) {
                alert("Unable to connect to TMDB API!");
            });
};

// Game search function
var gameSearch = function () {
    var tmdbUrl =
        "https://api.rawg.io/api/platforms?key=d7bbd8310023473491e2cb8f933da6ba&" +
        fetch(tmdbUrl)
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        console.log(data);
                    });
                } else {
                    alert("Error: " + response.statusText);
                }
            })
            .catch(function (error) {
                alert("Unable to connect to TMDB API!");
            });
};

$("#search").on("click", searchMedia);

// starting localStorage functions

// array to store search history
// var searchHistory = [];

// function grabPrevFinds() {
//     var previousRecommends = "";
//     var previousSearch = localStorage.getItem("");
//     if (previousSearch) {
//         searchHistory = JSON.parse(previousSearch);
//         for (var i = 0; i < searches.length; i++) {
//             // can add a linked button for previous recommendations
//         }
//     }
//     // need DIV to place text or links for past searches from local storage
// }

$('#search').on('click', searchMedia);

// Data we need to pull
// data.results[0].title - Movie title
// data.results[0].poster_path - Movie poster
// data.results[0].overview - Movie description
// data.results[0].video - To pull a preview if available, if false loop to another API for preview.
// data.results[0].vote_average - Movie popularity, maybe create a loop to pull a new result if popularity is below set threshold.
// data.results.total_pages - To limit how many results the API returns to avoid too much bandwidth utilization and accomidate heavier traffic.

// Setting to local storage
// function setPrevFinds () {
//     if (searchHistory === 5) {
//         searchHistory.shift();
//         searchHistory.push();
//         localStorage.setItem("", JSON.stringify(searchHistory));
//         grabPrevFinds();
//     } else {
//         searchHistory.push();
//         localStorage.setItem("", JSON.stringify(searchHistory));
//     }
// };
