import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

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
   return (
   <section className ="container">
      {isLoading ? (
        <div className ="loader">
          <span className ="loader__text">Loading...</span>
        </div>
        ) : (
          <div className = "movies">
           {movies.map(movie =>(
            <Movie 
              key={movie.id} 
              medium_cover_image= {movie.medium_cover_image} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres}
            />
        ))}
          </div>
      )} 
      </section>);
      }

}

export default App;
