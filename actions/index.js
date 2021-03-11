import {MOVIE_DATA} from "../resources/1_data";



const CATEGORY_DATA = [
  {id: 'c-0', name: 'all'},
  {id: 'c-1', name: 'drama'},
  {id: 'c-2', name: 'action'},
  {id: 'c-3', name: 'adventure'},
  {id: 'c-4', name: 'historical'},
]

export const getCategories = ()=>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(CATEGORY_DATA);
        },50)
    })
}

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