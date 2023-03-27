# React Movie App

This is a movie app developed with React. The objective of the project is to allow users to browse a list of movies, view movie details, add movies to favorites, and search for movies using an external API.

## Features

- Users can browse a list of movies, which is initially hardcoded but later fetched from an external API.
- Users can view details of a specific movie, including its title, release date, and synopsis.
- Users can add movies to a favorites list, which is persisted in local storage and can be edited or deleted.
- Users can search for movies using an external API, which returns a list of matching movies based on the user's query.

## How to run the app

To run the app, please follow these steps:

1. Clone or download this repository.
2. Install Docker and Docker Compose on your machine.
3. In the root directory of the project, run the command `docker-compose up --build`.
4. Open your browser and go to `http://localhost:8000` to use the app.


## Dependencies installation

```bash
docker-compose exec node npm install
```

## Development server

```bash
docker-compose exec node npm run development
```

## Technologies used

This project was developed with the following technologies:

- Javascript
- React
- Docker
- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) for movie data

## License

This project is licensed under the MIT License. Feel free to use and modify this code as per your requirement.


