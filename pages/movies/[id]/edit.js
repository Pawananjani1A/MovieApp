import React from 'react'
import Router from 'next/router'
import MovieCreateForm from '../../../components/movieCreateForm'
// import { getMovieById, updateMovie } from '../../../actions'


class EditMovie extends React.Component {

//   static async getInitialProps({query}) {
//     const movie = await getMovieById(query.id)

//     return { movie }
//   }

 const movie = {
    id: '1',
    name: 'The Shawshank Redemption',
    releaseYear: 1994,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 4.8,
    genre: 'drama',
    image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
  };

  handleUpdateMovie = (movie) => {
    // updateMovie(movie).then((updatedMovie) => {
    //   Router.push('/movies/[id]', `/movies/${movie.id}`)
    // })
  }

  render() {
    const { movie } = this.props
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm
          submitButton="Update"
          initialData={movie}
          handleFormSubmit={this.handleUpdateMovie} />
      </div>
    )
  }
}


export default EditMovie;