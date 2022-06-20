// Index.JS va faire la liaison entre chaque fichier composant, par exemple Header.js et tous les fichiers où nous souhaitons utiliser ce composant. 
// Recupère l'export par defaut du fichier selectionné et le renomme 
export { default as Header } from './header/header';
export { default as MovieDetails } from './movie-details/MovieDetails';
export {default as MovieList } from './movie-list/MovieList';
export {default as MovieElement } from './movie-list/MovieElement/MovieElement';
export {default as Loading } from './utils/Loading';
export {default as SearchBar } from './search-bar/SearchBar'
