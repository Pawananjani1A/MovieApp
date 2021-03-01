import {MOVIE_DATA} from "../resources/1_data";



export const getMovies = () =>{
   
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
    resolve(MOVIE_DATA);
    // reject("Couldn't fetch data");
    },50);
    })   
}

export const getMovieById = (id)=>{

    return new Promise((resolve,reject)=>{
        const movieIndex = MOVIE_DATA.findIndex(movie=>movie.id===id);
        const movie = MOVIE_DATA[movieIndex];

        setTimeout(()=>{
            resolve(movie);
        },50);
    })
}