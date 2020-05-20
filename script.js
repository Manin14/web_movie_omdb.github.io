// cari
$(".search-button").on("click", function () {
  
    $.ajax({
        url : 'http://www.omdbapi.com/?apikey=cf612af4&s=' + $(".input-keyword").val(),
        success : results => {
            const movies = results.Search;
    
            let cards ="";
            movies.forEach (m => {
                cards += `<div class="col-md-4 my-3">
                                <div class="card" style="width: 18rem;">
                                <img src="${m.Poster}" class="card-img-top" >
                                <div class="card-body">
                                    <h5 class="card-title">${m.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#exampleModal" data-imdbid="${m.imdbID}">Deatil</a>
                                </div>
                                </div>
                            </div>`;
            });
    
            $(".movie-container").html(cards);
    
            // ketika tombol detail di klik
            $(".modal-detail-button").on("click", function () {
                $.ajax({
                    url :  'http://www.omdbapi.com/?apikey=cf612af4&i='+ $(this).data("imdbid"),
                    success : m => {
                        const movieDeatil = ` <div class="container-fluid">
                                                    <div class="row">
                                                    <div class="col-md-3">
                                                        <img src="${m.Poster}" class="img-fluid">
                                                    </div>
                                    
                                                    <div class="col-md">
                                                        <ul class="list-group">
                                                        <li class="list-group-item">${m.Title}</li>
                                                        <li class="list-group-item">${m.Year}</li>
                                                        <li class="list-group-item">${m.Director}</li>
                                                        <li class="list-group-item">${m.Actors}</li>
                                                        <li class="list-group-item">${m.Writer}</li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                </div>`;
    
                             $(".modal-body").html(movieDeatil);                   
                    },
                    error : (e) => {
                        // jika eror
                        console.log(e.responseText);
                    }
                });
            });
        },
        error : (e) => {
            // jika eror
            console.log(e.responseText);
        } 
    });
});


