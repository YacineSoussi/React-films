import React, { Component } from 'react'

const style = {
  width: '480px',
  height: '280px',
  overflow: 'hidden',
  margin: '0px 5px 10px 5px',
  cursor: 'pointer',
}

export default class MovieElement extends Component {
  
  /* Fonction qui va être déclanché au hover, qui va ensuite appeler la fonction de App.jsx afin de modifier le selectedMovie 
  *
  */
  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  }

  // Component qui va rendre un element de la liste des movies (movielist)
  render() {
    return (
      <div onMouseEnter={this.mouseEnter} className={"d-flex flex-row bg-light"} style={style}>
        <img alt="film" width="185" src={this.props.movie.img} />
        <div className="flex-fill d-flex flex-column p-3">
          <h5>{this.props.movie.title}</h5>
          <hr className="w-100" />
          <p>{this.props.movie.details}</p>
        </div>
      </div>
    );
  }
}
