import * as axios from 'axios';

// On crée une instance axios  pour pouvoir si l'on veut appeler plusieurs serveurs differents
const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

// Grâce aux intercepteurs on met par defaut le bearer token
apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODFkZmU0MDZiMDhjY2FlYjUwMjRmY2QzM2UzYzFlOCIsInN1YiI6IjVjMGU4NTlmYzNhMzY4MjUyYTBjOTM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QG7-vvAvmEXOVUD2ZaONg5e_AHqXaTlPVLeDz7mzhDs'
  return req;
})

export default apiMovie;

// On map sur le tableau de film de l'api en utilisant les ({}) pour que chaque element du tableau qui va être rendu soit un objet
export const mapMovie = (m) => ({ 
        img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
        title: m.title,
        details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
        description: m.overview
      })
