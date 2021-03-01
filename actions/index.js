import {MOVIE_DATA} from "../resources/1_data";



export const getMovies = () =>{
   
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
    resolve(MOVIE_DATA);
    // reject("Couldn't fetch data");
    },50);
    })   
}