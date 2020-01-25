import React, { useEffect } from "react";
import {
  fetchMoviesList
} from "../actions";
import { useDispatch, useSelector } from 'react-redux'
import { MovieCard } from "./MovieCard";
import { CardDeck} from "react-bootstrap";
import {Loader} from "./MoviePage"; 


const HomePage = props => {
  document.title = "Popular Movies - Your all-in-one movies home!";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesList())
  }, [])
  const movies = useSelector((state) => state.home.movies);
  const isLoading = useSelector(state => state.home.isLoadingMovies);

  const generateMovieCard = (movies) => {
    return movies.map((movie, idx) => {
      return <MovieCard key={idx} movie={movie} />
    })
  }
  return (
    <div>
      <CardDeck style={{margin:"20px 100px 20px 120px" }}>
              {/* {generateMovieCard(movies)} */}
              {!isLoading?generateMovieCard(movies):<Loader/>}
      </CardDeck>
      {console.log(movies)}

    </div>

  );
}
export default HomePage;
