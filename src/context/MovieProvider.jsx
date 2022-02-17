import { createContext, useContext, useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";
import { getOneMovieByIdAPI, getTrendingTodayAPI } from "../servises/api";

const MovieContext = createContext()
export const useMovieContext = () => useContext(MovieContext)

const MovieProvider = ({ children }) => {
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
    <MovieContext.Provider value={{ movieList, setMovieList }}>
      {children}
    </MovieContext.Provider>
  )
}
 
export default MovieProvider; 