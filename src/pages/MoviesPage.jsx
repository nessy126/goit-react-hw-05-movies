import qs from "query-string"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { getMoviesListBySearchAPI } from "../servises/api"
import MovieList from "./../components/MovieList/MovieList"

const MoviesPage = () => {
  const [input, setInput] = useState("")
  const [movieList, setMovieList] = useState([])
  
  const location = useLocation()
  const history = useHistory()
  const search = qs.parse(location.search);
  const { query } = search

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  useEffect(() => {
    query &&
      getMoviesListBySearchAPI(query).then((data) => {
        setMovieList(data)

      })}, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input) return
    history.push({ pathname: "/movies", search: "?query=" + input })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={input} />
        <button type="submit">Search</button>
      </form>
      {movieList.length > 0 && <MovieList movieList={movieList} />}
    </>
  )
}

export default MoviesPage
