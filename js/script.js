var media = document.querySelector('#media');
var genreDropDown = document.querySelector('#genre');



// Search execution function
var searchMedia = function(){    
    
    if (media.value == "tv"){
        tvSearch();
    }else if (media.value == "movie"){
        movieSearch();
    }else if (media.value == "game"){
        gameSearch();
    }
}

// Movie search function
var movieSearch = function(){
    var tmdbUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=159f40037d6a65fa5a6290ec992f31ce&language=en-US&sort_by=popularity.desc'
    fetch(tmdbUrl)
    .then(function(response){
        if (response.ok){
            response.json()
            .then(function(data){
                console.log(data);
                for (i = 0; i < data.results.length; i++) {
                    console.log(data.results[i]);
                    data.results[i];
                }
            });
        }else{
            alert('Error: ' + response.statusText);
        }
    })
    .catch(function(error){
        alert("Unable to connect to TMDB API!");
    }); 
}

// Tv search function
var tvSearch = function(){
    var tmdbUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=159f40037d6a65fa5a6290ec992f31ce&'
    + 
    fetch(tmdbUrl)
    .then(function(response){
    if (response.ok){
        response.json()
        .then(function(data){
            console.log(data);
    });
    }else{
        alert('Error: ' + response.statusText);
    }
    })
    .catch(function(error){
    alert("Unable to connect to TMDB API!");
    });

}

// Game search function
var gameSearch = function (){
    var tmdbUrl = 'https://api.rawg.io/api/platforms?key=d7bbd8310023473491e2cb8f933da6ba&'
    + 
    fetch(tmdbUrl)
    .then(function(response){
    if (response.ok){
        response.json()
        .then(function(data){
            console.log(data);
    });
    }else{
        alert('Error: ' + response.statusText);
    }
    })
    .catch(function(error){
    alert("Unable to connect to TMDB API!");
    });
}

$('#search').on('click', searchMedia);

// Data we need to pull
// data.results[0].title - Movie title
// data.results[0].poster_path - Movie poster
// data.results[0].overview - Movie description
// data.results[0].video - To pull a preview if available, if false loop to another API for preview.
// data.results[0].vote_average - Movie popularity, maybe create a loop to pull a new result if popularity is below set threshold.
// data.results.total_pages - To limit how many results the API returns to avoid too much bandwidth utilization and accomidate heavier traffic.
