import React, { Component } from 'react'
import MovieElement from './MovieElement/MovieElement'

export default class MovieList extends Component {
  render() {
    return (
      // Component qui va boucler sur la liste des tous les films de l'api et afficher un MovieElement
      <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
        {this.props.movies.map((m, index) => (
          <MovieElement key={m.title + index}
            movie={m}
            updateSelectedMovie={() => { this.props.updateSelectedMovie(index) }} />
        ))}
      </div>
    );
  }
}
