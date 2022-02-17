import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import { useMovieContext } from "../context/MovieProvider";
import { getTrendingTodayAPI } from "../servises/api";
// import { getTrendingTodayAPI } from "../servises/api";

const HomePage = () => {
  const location = useLocation()
    const [movieList, setMovieList] = useState([])

    // const params = useParams()

    // const setID = (id) => {
    //   setMovieID(params.movieId)
    //   console.log(id);
    //   getOneMovieByIdAPI(movieID)
    // }

    useEffect(() => {
      getTrendingTodayAPI().then((data) => {
        setMovieList(data)
      })
    }, [])


  return (
    <>
      <h1>Trending today</h1>
      <MovieList movieList={movieList} />
    </>
  )
}
 
export default HomePage;