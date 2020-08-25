import React from 'react';
import axios from 'axios';
import Movie from './Movie';

// constructor()는 웹사이트에 표시되기 전에 실행됨
class App extends React.Component{
    
  state = {
    isLoading : true,
    movies: []
  };
  getMovies = async() => {
    const { 
      data : { 
        data : { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
    console.log({ movies })
  };

  componentDidMount() {
    this.getMovies();
  }

  render(){
   const {isLoading, movies} = this.state;
   return <div>{isLoading ? "Loading..." : movies.map(movie => {
     return <Movie key={movie.id} medium_cover_image= {movie.medium_cover_image} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} />
   })}</div>;
  }

}

export default App;
