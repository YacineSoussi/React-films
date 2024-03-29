import React, { Component } from 'react'

// Component qui va afficher l'element à droite qui sera selectionné
export default class MovieDetails extends Component {
  render() {
    return (
      
      <div className="w-25 border p-4 d-flex flex-column">
        <h5>{ this.props.movie.title }</h5>
        <hr className="w-100" />
        <div>
          <img className="d-block mx-auto w-100" src={ this.props.movie.img } />
        </div>
        <hr className="w-100" />
        <span className="text-secondary">{ this.props.movie.details }</span>
        <span>{ this.props.movie.description }</span>
      </div>
    );
  }
}
