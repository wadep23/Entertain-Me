var media = $('#media').value;
var genre = $('#genre').value;

// Search execution function
var searchMedia = function(){
    
    if (media == tv){
        tvSearch();
    }else if (media == movie){
        movieSearch();
    }else if (media == game){
        gameSearch();
    }
}

// Movie search function
var movieSearch = function(){
    var tmdbUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=159f40037d6a65fa5a6290ec992f31ce&'
    + 
    fetch(getCoordApi)
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
        alert("Unable to connect to Weather API");
    });
    
}

// Tv search function
var tvSearch = function(){
    var tmdbUrl = 'https://api.themoviedb.org/3/movie/76341?api_key=159f40037d6a65fa5a6290ec992f31ce&'
    + 
    fetch(getCoordApi)
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
    alert("Unable to connect to Weather API");
    });

}

// Game search function
var gameSearch = function (){
    var tmdbUrl = 'https://api.rawg.io/api/platforms?key=d7bbd8310023473491e2cb8f933da6ba&'
    + 
    fetch(getCoordApi)
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
    alert("Unable to connect to Weather API");
    });
}

$('#search').on('click', searchMedia);