import React, { Component } from 'react';
import { Formik } from 'formik';
import apiMovie, { mapMovie } from '../../conf/api.movie';

export default class SearchBar extends Component {

  submit = (values, actions) => {
   
    // On récupère les clefs query et language dans un tableau.
    // On boucle ensuite sur le tableau de clefs pour afficher la valeur qui correspond à la clef
    // On join ensuite pour rendre le tableau en string à qui on passe le seperateur en param donc (ici rien pour enlever la ,)
        
           const query = '?' + Object.keys(values).map( k => `${k}=${values[k]}&`).join('');

           apiMovie.get('/search/movie' + query)
          .then( response => response.data.results )
          .then( moviesApi => {
            
            const movies = moviesApi.map(mapMovie);
            // On modifie la liste des films (celle qui est affiché)
            
            this.props.updateMovies(movies);
            actions.setSubmitting(false);
          })
          .catch( err => console.log(err));

  }

  render() {
    return (
      <Formik
        onSubmit={this.submit}
        initialValues={{ query: '', language: 'en_US' }}
      >
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
            <input name="query" className="flex-fill form-control mr-2" 
              placeholder="Search ..." onChange={handleChange} onBlur={handleBlur} />
              <select onChange={handleChange} onBlur={handleBlur} name="language" className='mr-2 form-controle w-25'>
                  <option value="en_US">Anglais</option>
                  <option value="fr_FR">Français</option>
              </select>
            <button className="btn btn-small btn-success" type="submit" 
              disabled={isSubmitting} >Rechercher</button>
          </form>
        )}
      </Formik>
    )
  }
}