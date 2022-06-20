import React, { Component } from 'react';
import {Header, MovieDetails, MovieList, Loading, SearchBar} from '../components/index';
import apiMovie, { mapMovie } from '../conf/api.movie';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }
  
      }

      /* Fonction qui va boucler sur tous les films afin de modifier le filmDetails
      * Fonction qui va être donnée a movieList, qui va donner cette fonction a movieElement
      */
      updateSelectedMovie = (index) => {
        // L'index du film qui a été récupéré est passé au state selectedMovie
        this.setState({
          selectedMovie: index
        })
      }

      componentDidMount() {
        apiMovie.get('/discover/movie')
          .then( response => response.data.results )
          .then( moviesApi => {
            // On map sur le tableau de film de l'api en utilisant les ({}) pour que chaque element du tableau qui va être rendu soit un objet
            const movies = moviesApi.map(mapMovie);
            this.updateMovies(movies);
            actions.setSubmitting(false);
          })
          .catch( err => console.log(err));
      }
    
      // Permet de modifier le state des movies et de stop le loading
      updateMovies = (movies) => {
        this.setState({
          movies,
          loaded: true
        })
      }

    render() {
        return (
            <div className='app d-flex flex-column'>
            <Header/>
            <SearchBar updateMovies={ this.updateMovies } />
            { this.state.loaded ? (
          <div className="d-flex flex-row flex-fill pt-4 p-2" >
            <MovieList 
              movies={ this.state.movies } 
              updateSelectedMovie={ this.updateSelectedMovie }/>
              {this.state.movies.length ? (<MovieDetails movie={ this.state.movies[this.state.selectedMovie] }/>) : (null)}
            
          </div>
        ) : (
          <Loading />
        )}
           
            </div>
        );
    }
}

export default App;