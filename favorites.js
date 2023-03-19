let movies = [];
const movieList = document.getElementById('list');

async function fetchmovies(){
    // Default Data
    movies=[
        { "id": 1, "title": "Sample Movie 1"},
        { "id": 2, "title": "Sample Movie 2"},
        { "id": 3, "title": "Sample Movie 3"},
        { "id": 4, "title": "Sample Movie 4"},
    ];
    renderList();
}

function addmovieToDOM(movie){
    const li=document.createElement('li');

    li.innerHTML=`
        <img src="image_not_found.png" alt="" class="fav">
        <label for="${movie.id}" >${movie.title}</label>
        <img src="bin.svg" class="delete" data-id="${movie.id}" />   
    `;   
    
    movieList.append(li);
}

function renderList () {
    movieList.innerHTML='';

    for(let i=0;i<movies.length;i++){
        addmovieToDOM(movies[i]);
    }

    moviesCounter.innerHTML=movies.length;
}



function deletemovie (movieId) {
    const newmovies=movies.filter(function (movie){
        return movie.id!==Number(movieId);
    })

    movies=newmovies;
    renderList();
}


function handleClickListener(e){   
    const target=e.target;

    if(target.className==='delete'){
        const movieId=target.dataset.id;   
        deletemovie(movieId);
        return;
    }
}

function initializeApp(){
    fetchmovies();
    document.addEventListener('click',handleClickListener);  
}

initializeApp();