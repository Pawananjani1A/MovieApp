import {MOVIE_DATA} from "../resources/1_data";
import axios from "axios";

const BASE_URL = 'http://localhost:3000';


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
   return axios.get(`${BASE_URL}/api/v1/movies`).then(res=>res.data);
}

export const getMovieById = (id)=>{
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res=>res.data);
}


export const createMovie = (movie) =>{
    
    //create id of the movie
    movie.id = Math.random().toString(36).substr(2, 5);
   return axios.post(`${BASE_URL}/api/v1/movies`,movie).then(res=>res.data);
}