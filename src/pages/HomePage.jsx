import { useState, useEffect } from "react"
import MovieList from "../components/MovieList/MovieList"
import { getTrendingTodayAPI } from "../servises/api"

const HomePage = () => {
  const [movieList, setMovieList] = useState([])

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

export default HomePage
