import { useRouter } from 'next/router';
import MovieList from "../../components/movieList";
import {getMoviesByCategory} from "../../actions";



const Category = (props)=>{

 const router = useRouter();
 const {category} = router.query;
 const {movies} = props;
const jsx = movies.length===0?(<h1>No movie found for {category} category.</h1>):(<div className="container">
           <div className="row">
            <MovieList 
              movies={movies}/>
            </div>
             </div>);
             
 return (jsx);
}


Category.getInitialProps = async(context)=>{
    
  const {category} = context.query;
  const movies = await getMoviesByCategory(category);

  return {movies};
}




export default Category;